import React, { useState } from 'react';
import FlightLand from '@material-ui/icons/FlightLand';
import FlightTakeOff from '@material-ui/icons/FlightTakeoff';
import KeyBoardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyBoardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import { Motion, spring } from 'react-motion';
import formatDate from '../utils/functions.js';
import '../styles/Offer.scss';

export default function Offer(props) {
  const { offerItems } = props.offer;
  const [displayDetails, setDisplayDetails] = useState(false);

  function showDetails() {
    setDisplayDetails(!displayDetails);
  }

  return (
    <div className="Offer">
      <div className="Offer-top">
        <div>
          {
            formatDate(
              offerItems[0].services[0].segments[0].flightSegment.departure.at
            ).date
          }
        </div>
        <div>
          {
            formatDate(
              offerItems[0].services[0].segments[0].flightSegment.departure.at
            ).time
          }
        </div>
        <div className="Offer-price">{offerItems[0].price.total} €</div>
        {offerItems[0].services[0].segments.length > 1 ? (
          <div className="Offer-stop">
            {offerItems[0].services[0].segments.length - 1} stop
          </div>
        ) : (
          <div className="Offer-direct">Direct</div>
        )}
        {displayDetails ? (
          <KeyBoardArrowUp onClick={showDetails} className="Offer-keydown" />
        ) : (
          <KeyBoardArrowDown onClick={showDetails} className="Offer-keydown" />
        )}
        {displayDetails}
      </div>
      <Motion
        defaultStyle={{ height: 0 }}
        style={{ height: displayDetails ? spring(70) : spring(0) }}
      >
        {interpolatingStyle => (
          <div style={interpolatingStyle} className="Offer-bottom">
            {offerItems[0].services[0].segments.map(item => {
              return (
                <div className="Offer-OD" key={item.flightSegment.number}>
                  <FlightTakeOff className="Offer-OD-icon Offer-OD-icon-departure"/>
                  <div className="Offer-OD-item Offer-OD-item-iata">{item.flightSegment.departure.iataCode}</div>
                  <div className="Offer-OD-item">{formatDate(item.flightSegment.departure.at).shortDate}</div>
                  <div className="Offer-OD-item">{formatDate(item.flightSegment.departure.at).time}</div>
                  <FlightLand className="Offer-OD-icon Offer-OD-icon-arrival"/>
                  <div className="Offer-OD-item Offer-OD-item-iata">{item.flightSegment.arrival.iataCode}</div>
                  <div className="Offer-OD-item">{formatDate(item.flightSegment.arrival.at).shortDate}</div>
                  <div className="Offer-OD-item">{formatDate(item.flightSegment.arrival.at).time}</div>
                </div>
              );
            })}
          </div>
        )}
      </Motion>
    </div>
  );
}
