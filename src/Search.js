import React from "react";

const Search = ({
  searchTerm,
  onSearchChange,
  onSearchClick,
  isSearchClicked,
}) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search countries"
        value={searchTerm}
        onChange={onSearchChange}
        className="search-input"
      />
      <button
        onClick={onSearchClick}
        className={`search-button ${isSearchClicked ? "clicked" : ""}`}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
