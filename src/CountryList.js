import React from "react";

const CountryList = ({ countries, onSelectCountry }) => {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.cca3} onClick={() => onSelectCountry(country)}>
          {country.name.common}
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
