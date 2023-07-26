// SearchBar.tsx
import React, { useContext, useState } from "react";
import { ApiContext, ApiContextType } from "../context-providers/ApiContext";

interface SearchBarProps {}

const SearchBar = (props: SearchBarProps) => {
  const { searchText, updateSearchText, weatherData } = useContext(
    ApiContext
  ) as ApiContextType;

  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = () => {
    updateSearchText(searchTerm);
  };
  console.log("searchText", searchText);

  console.log("data", weatherData);
  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for cities"
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
};

export default SearchBar;
