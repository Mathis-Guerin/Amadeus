import React from 'react';
import '../styles/Header.scss';
import logo from '../assets/img/amadeus.png'


function Header() {


    return (
        <div className="Header">
            <img alt="Amadeus Logo" src = {logo}/>
        </div>
    )
}

export default Header;
