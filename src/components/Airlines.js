import React, { useEffect, useReducer, useContext } from 'react';
import loadingGif from '../assets/img/loading.gif'
import '../styles/Airlines.scss'
import TextField from '@material-ui/core/TextField';
import { AmadeusContext } from '../App.js'

function Airlines() {

    const [state, setState] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {airlines: [], input: '', search: '', loading: false}
    )

    const amadeus = useContext(AmadeusContext)

    function getAirlines(input) {
        setState({loading: true})
        amadeus.referenceData.airlines.get({
            airlineCodes : input === '' ? undefined : input
        }).then(function(response){
          setState({airlines: response.data, loading: false})
        }).catch(function(error){
          console.log(error.code);
          setState({loading: false})
        });
    }

    useEffect(()=> {
        getAirlines(state.input)
    },[])

    function handleChange(e) {
        setState({input: e.target.value})
    }

    function handleChangeSearch(e) {
        setState({search: e.target.value})
    }

    const list = state.airlines
        .filter(airline => {
            const name = airline.commonName
            const iata = airline.iataCode
            const condition = name !== undefined 
                && name.toLowerCase().includes(state.search.toLowerCase())
                && iata.toLowerCase().includes(state.input.toLowerCase())
            return condition
        })
        .map((airline) => 
        <div className="Airline" key={airline.iataCode}>
            <div><span>Name: </span><span>{airline.commonName}</span></div>    
            <div><span>IATA code: </span><span>{airline.iataCode}</span></div>
            <div><span>ICAO code: </span><span>{airline.icaoCode}</span></div> 
        </div>
    )


    return (
        <div className="Airlines">
            <div className="Airlines-title">List of airlines</div>
            <TextField className="Airlines-input" variant="outlined"  type="Text" value={state.search} onChange={handleChangeSearch} label="Search..."></TextField>
            <TextField className="Airlines-input" variant="outlined" type="Text" value={state.input} onChange={handleChange} label="IATA code"></TextField>
            {!state.loading ?
                <div className="Airlines-wrapper">
                    {list}
                </div>
            :<div className="Airlines-loading">
                <img src={loadingGif} alt="Loading"></img>
            </div>}
        </div>
    )
}

export default Airlines;
