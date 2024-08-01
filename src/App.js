import React, { useState, useEffect } from "react";
import "./styles.css";
import CountryList from "./CountryList";
import CountryDetails from "./CountryDetails";
import Search from "./Search";
import "mvp.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
    };

    fetchCountries();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredCountries.length > 0) {
      setSelectedCountry(filteredCountries[0]);
    } else {
      setSelectedCountry(null); // Optional: Clear the selected country if no match
    }

    // Toggle the search button state
    setIsSearchClicked(!isSearchClicked);

    // Optionally, reset the button color after a short delay
    setTimeout(() => {
      setIsSearchClicked(false);
    }, 300); // Reset after 300ms or any other duration
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Countries Information</h1>
      <Search
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onSearchClick={handleSearchClick}
        isSearchClicked={isSearchClicked}
      />
      <CountryList
        countries={filteredCountries}
        onSelectCountry={setSelectedCountry}
      />
      {selectedCountry && <CountryDetails country={selectedCountry} />}
    </div>
  );
}

export default App;
