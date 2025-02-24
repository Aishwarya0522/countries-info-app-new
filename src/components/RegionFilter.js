import React from "react";

const RegionFilter = ({ region, setRegion }) => {
  return (
    <select onChange={(e) => setRegion(e.target.value)} value={region}>
      <option value="">All Regions</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default RegionFilter;
