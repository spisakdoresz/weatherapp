// SearchBar.tsx
import React, { useContext, useState } from "react";
import { ApiContext, ApiContextType } from "../context-providers/ApiContext";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {}

const SearchBar = (props: SearchBarProps) => {
  const { searchText, updateSearchText, weatherData } = useContext(
    ApiContext
  ) as ApiContextType;

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleSearch = () => {
    updateSearchText(searchTerm);
    setSearchTerm(""); // Clearing Search Bar after search
    setIsClicked(true); // Set the clicked state to true
    setTimeout(() => {
      setIsClicked(false); // Reset the clicked state after a delay
    }, 200); // Adjust the delay as needed
  };
  console.log("searchText", searchText);

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        background: isClicked ? "rgba(249, 171, 148, 0.3)" : "transparent",
        borderRadius: "25px",
        padding: "10px",
        transition: "background 0.3s",
      }}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for cities"
        style={{
          padding: "10px",
          borderRadius: "25px",
          border: "1px solid #ccc",
          marginRight: "10px",
        }}
      />
      <SearchIcon
        onClick={handleSearch}
        style={{
          color: "#F9AB94",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default SearchBar;
