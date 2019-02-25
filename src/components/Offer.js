import React from 'react';
import FlightLand from '@material-ui/icons/FlightLand';
import FlightTakeOff from '@material-ui/icons/FlightTakeoff';
import '../styles/Offer.scss';

export default function Offer(props) {
  const { id, offerItems } = props.offer;
  return (
    <div className="Offer">
      <div className="Offer-top">
        {offerItems[0].services[0].segments.map(item => {
          return (
            <div className="Offer-OD" key={item.flightSegment.number}>
              <FlightTakeOff />
              {item.flightSegment.departure.iataCode}
              <FlightLand />
              {item.flightSegment.arrival.iataCode}
            </div>
          );
        })}
        <div className="Offer-price">{offerItems[0].price.total} €</div>
        <div>{offerItems[0].services[0].segments.length - 1} stop</div>
      </div>
      <div className="Offer-bottom">
        <div>id: {id}</div>
        <div>taxes {offerItems[0].price.totalTaxes}</div>
      </div>
    </div>
  );
}
