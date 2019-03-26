import React from 'react'
import '../styles/FlightDetails.scss'
import FlightLand from '@material-ui/icons/FlightLand';
import FlightTakeOff from '@material-ui/icons/FlightTakeoff';
import Euro from '@material-ui/icons/EuroSymbol';
import formatDate from '../utils/functions.js'

function FlightDetails(props) {

    const flight = props.location.state.flight
    const departureDate = formatDate(flight.departureDate)
    const returnDate = formatDate(flight.returnDate)


    return (
        <div className="FlightDetails">
            <div className="FlightDetails-title">Details of the flight</div>
            <div className="FlightDetails-content">
                <div className="FlightDetails-OD"> 
                    <span><FlightTakeOff/>{flight.origin}</span>
                    <span><FlightLand/>{flight.destination}</span>
                </div>
                <div className="FlightDetails-price">{flight.price.total} <Euro/></div>
                <div className="FlightDetails-dates">
                    <div>Departure : {departureDate.date} at {departureDate.time}</div>
                    <div>Return : {returnDate.date} at {returnDate.time}</div>
                </div>
                <div className="FlightDetails-book">
                    <span>Book this flight</span>
                </div>
            </div>
        </div>
    )
}

export default FlightDetails