import { use, useState } from "react";
import Country from "./Country/Country";
import './countries.css'


const Countries = ({CountriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCounstries = (country)=>{
        console.log('country clicked', country);
        const newVisitedCountries=[...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
        
    }
    const countriesData = use(CountriesPromise)
    const countries= countriesData.countries;

    
    
    return (
        <div >
            <h1>My Countries : {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(country=><li key={country.ccn3.ccn3}> {country.name.common}</li>)
                }
            </ol>
            <div className="countries">
                {
                countries.map(country=> <Country
                key={country.ccn3.ccn3}
                     country={country} handleVisitedCounstries={handleVisitedCounstries} >

                     </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;