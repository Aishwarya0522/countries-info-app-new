import React, { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";
import RegionFilter from "../components/RegionFilter";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase()) &&
    (region ? country.region === region : true)
  );

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <RegionFilter region={region} setRegion={setRegion} />
      <div>
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

