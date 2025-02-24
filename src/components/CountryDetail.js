import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetail = () => {
  const { countryCode } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      .then((response) => response.json())
      .then((data) => setCountry(data[0]));
  }, [countryCode]);

  if (!country) return <div>Loading...</div>;

  return (
    <div>
      <h1>{country.name.common}</h1>
      <img src={country.flags.svg} style={{ width: '200px', height: 'auto' }} alt={`Flag of ${country.name.common}` } />
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <p>Population: {country.population}</p>
      <p>Languages: {Object.values(country.languages || {}).join(", ")}</p>
      <p>Area: {country.area} km²</p>
    </div>
  );
};

export default CountryDetail;
