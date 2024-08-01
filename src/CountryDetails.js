import React from "react";

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital ? country.capital[0] : "N/A"}</p>
      <p>Region: {country.region}</p>
      <p>Population: {country.population}</p>
      <p>Area: {country.area} km²</p>
    </div>
  );
};

export default CountryDetails;
