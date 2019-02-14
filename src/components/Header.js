import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Header.scss';
import logo from '../assets/img/amadeus.png'

function Header() {


    return (
        <div className="Header">
            <div className="Header-image">
                <img alt="Amadeus Logo" src = {logo}/>
            </div>
            <div className="Header-menu">
                <Link to="/" className="Header-menu-item">Home</Link>
                <Link to="/airlines" className="Header-menu-item">Airlines</Link>
                <Link to="/flights" className="Header-menu-item">Flights</Link>
            </div>
        </div>
    )
}

export default Header;
