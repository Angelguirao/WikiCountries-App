import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function HomePage() {

const [countries, setCountries] = useState([]);

useEffect(() => {

    const getCountry = async () => {
        const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
        const countriesData = response.data
        setCountries(countriesData)
    }
    getCountry()
}, [])
console.log(countries)
   
    return (

        <>
        <h2>WikiCountries: Your Guide to the World</h2>
        <div>
            {countries.map((country)=> {
                return (
                     <div key={country.name.common}>
                    <Link to={country.alpha3Code}>
                    <img src={"https://flagpedia.net/data/flags/icon/72x54/" + country.alpha2Code.toLowerCase() + '.png' } />

                        {country.name.common}</Link>
                    </div>
                )
            }
                   

                  )}
        </div>
        </>
        
        

    )
}

export default HomePage;
