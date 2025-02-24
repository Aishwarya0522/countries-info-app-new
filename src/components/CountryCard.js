import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <Link to={`/country/${country.cca3}`}>{country.name.common}</Link>
    </div>
  );
};

export default CountryCard;
