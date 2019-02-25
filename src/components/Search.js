import React, { useState, useEffect, useContext } from 'react';
import { AmadeusContext } from '../App.js';
import '../styles/Search.scss';
import AsyncSelect from 'react-select/lib/Async';
import Button from '@material-ui/core/Button';
import FlightIcon from '@material-ui/icons/Flight';
import Offer from './Offer';
import loadingGif from '../assets/img/loading.gif';

function Search() {
  const amadeus = useContext(AmadeusContext);
  const [offers, setOffers] = useState([]);
  const [searchDeparture, setSearchDeparture] = useState('');
  const [searchArrival, setSearchArrival] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function searchFlight () {
    setIsLoading(true)
    amadeus.shopping.flightOffers
      .get({
        origin: searchDeparture,
        destination: searchArrival,
        departureDate: '2019-08-01',
      })
      .then(function(response) {
        setOffers(response.data);
        setIsLoading(false)
        console.log(response.data);
      })
      .catch(function(error) {
        setIsLoading(false)
        console.log(error.code);
        setOffers([]);
      });
  };

  function promiseOptions(inputValue) {
    return new Promise((resolve, reject) => {
      if (inputValue.length > 2) {
        amadeus.referenceData.locations
          .get({
            keyword: inputValue,
            subType: 'AIRPORT',
          })
          .then(function(response) {
            resolve(formattedAirportsCodes(response.data));
          })
          .catch(function(error) {
            reject(error.code);
          });
      } else {
        return resolve([])
      }
    })
  }

  function formattedAirportsCodes(departureAirportCodes) {
    return departureAirportCodes.map(airport => {
      return {
        value: airport.iataCode,
        label: `${airport.address.cityName} - ${airport.name}`,
      };
    });
  }

  function onInputDepartureChange(inputValue) {
    setSearchDeparture(inputValue.value)
  }

  function onInputArrivalChange(inputValue) {
    setSearchArrival(inputValue.value)
  }

  return (
    <div className="Search">
      <div className="Search-title">Search a flight</div>
      <div className="Search-departure">
        <div className="Search-OD-title">Departure</div>
        <AsyncSelect 
          cacheOptions
          defaultOptions
          loadOptions={promiseOptions}
          onChange={onInputDepartureChange}
          placeholder="Departure"
          className="Search-select"
        />
      </div>
      <div className="Search-arrival">
        <div className="Search-OD-title">Arrival</div>
        <AsyncSelect 
          cacheOptions
          defaultOptions
          loadOptions={promiseOptions}
          onChange={onInputArrivalChange}
          placeholder="Arrival"
          className="Search-select"
        />
      </div>
      <div onClick={searchFlight} className="Search-button-wrapper">
        <Button variant="contained" size="large" className="Search-button">
          Search <FlightIcon className="Search-button-icon"/>
        </Button>
      </div>
      {isLoading ?
        <div className="Airlines-loading">
          <img src={loadingGif} alt="Loading"></img>
        </div>
      :<div className="Offer-wrapper">
        {offers.map((offer) =>
          <Offer key={offer.id} offer={offer}/>)}
        </div>
      }
    </div>
  );
}

export default Search;
