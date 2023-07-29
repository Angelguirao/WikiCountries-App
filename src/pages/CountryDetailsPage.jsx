import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams, Link } from 'react-router-dom';


function CountryDetails() {

const {countryId} = useParams();
// console.log(useParams())
// console.log(countryId);
const [countryData, setCountryData] = useState(null);
console.log(countryData);
const isLoading = countryData === null;

useEffect(()=> {
    const getCountryInfo = async () => {
    const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`);
    setCountryData(response.data);
    console.log(response.data)
    }
    getCountryInfo();
}, [countryId]) 

    if (isLoading) {
        return <p>Loading country data...</p>;
    }

  return (
    <div>
      <h2>{countryData.name.common}</h2>
      <p>Capital: {countryData.capital}</p>
      <p>Area: {countryData.area} km²</p>
      <p>Borders:</p>
      <ul>
        {countryData.borders.map((borderCountryCode) => (
          <li key={borderCountryCode}>
            <Link to={`/${borderCountryCode}`}>
              {borderCountryCode}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryDetails;