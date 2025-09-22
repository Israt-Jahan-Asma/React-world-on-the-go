import React, { useState } from 'react';
import './country.css'
const Country = ({country, handleVisitedCounstries}) => {
    const [visited, setVisited] = useState(false);
   
    const handleVisited = () =>{
        // setVisited(visited? false : true)
        setVisited (!visited)
        handleVisitedCounstries(country)
        
        
    }
    return (
        // <div className={`country ${visited ? 'country-visited' : 'country-not-visited'}`}>
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common} </h3>
            <h5>Area: {country.area.area} {country.area.area> 30000 ? 'Big country' : 'Small Country'} </h5>
            <p>Population: {country.population.population} </p>
            <button onClick={handleVisited} >

               {visited ? 'Visited' : 'Not Visited'} </button>
        </div>
    );
};

export default Country;