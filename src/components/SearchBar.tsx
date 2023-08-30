import { useContext, useState } from "react";
import {
  BasicCityWeatherContext,
  BasicCityWeatherContextType,
} from "../context-providers/BasicCityWeatherContext";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const { updateSearchText, weatherData, lastSuccessfulSearch } = useContext(
    BasicCityWeatherContext
  ) as BasicCityWeatherContextType;

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (searchTerm !== "") {
      updateSearchText(searchTerm);
      setSearchTerm("");
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 200);
    }
  };

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
        onKeyDown={handleKeyDown}
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
      {lastSuccessfulSearch && !weatherData && (
        <div style={{ marginTop: "10px" }}>
          Last successful search: {lastSuccessfulSearch}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
