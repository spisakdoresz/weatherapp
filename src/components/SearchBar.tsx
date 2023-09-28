import { useContext, useState } from "react";
import {
  BasicCityWeatherContext,
  BasicCityWeatherContextType,
} from "../context-providers/BasicCityWeatherContext";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const { updateSearchText } = useContext(
    BasicCityWeatherContext
  ) as BasicCityWeatherContextType;

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handlePressEnterInSearchBar = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
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
        borderRadius: "1.563rem",
        padding: "0.625rem",
        transition: "background 0.3s",
      }}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handlePressEnterInSearchBar}
        placeholder="Search for cities"
        style={{
          padding: "0.625rem",
          borderRadius: "1.563rem",
          border: "0.063rem solid #ccc",
          marginRight: "0.625rem",
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
