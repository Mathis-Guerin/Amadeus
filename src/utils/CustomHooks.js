import { useState, useEffect, useContext } from 'react';
import { AmadeusContext } from '../App.js'


export default function useAirportCode(search) {
    const [airports, setAirports] = useState([])
    const amadeus = useContext(AmadeusContext)

    useEffect(() => {
        if(search.length > 2) {
            amadeus.referenceData.locations.get({
                keyword: search,
                subType: "AIRPORT"
            }).then(function(response){
                setAirports(response.data)
            }).catch(function(error){
               console.log(error.code);
            });
        }
    }, [search])
    return airports;
}