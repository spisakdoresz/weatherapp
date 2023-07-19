import React, { useState, useEffect } from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import homeImage from "/logo.png";
import { Button, List, ListItem } from "@material-ui/core";
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledBox = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#BB8995",
  alignItems: "center",
});

const StyledForm = styled("form")({
  display: "flex",
  alignItems: "center",
});

const StyledInput = styled("input")({
  border: "2px solid black",
  borderRadius: "2rem",
  height: "1.5rem",
  width: "15rem",
});

interface HeaderProps {
  onSearch: (searchTerm: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestedResults, setSuggestedResults] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm.length >= 2) {
      fetchSuggestedResults(searchTerm);
    } else {
      setSuggestedResults([]);
    }
  }, [searchTerm]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleResultItemClick = (result: string) => {
    setSearchTerm(result);
    setSuggestedResults([]);
    onSearch(result);
  };
  const API_URL = "https://www.metaweather.com/api/location/search/";

  const fetchSuggestedResults = async (searchTerm: string) => {
    try {
      const response = await fetch(`${API_URL}?query=${searchTerm}`);
      if (response.ok) {
        const data = await response.json();
        setSuggestedResults(data);
      } else {
        console.error("Failed to fetch suggested results");
      }
    } catch (error) {
      console.error("Failed to fetch suggested results", error);
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <React.Fragment>
      <StyledBox>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 200,
            paddingRight: 200,
          }}
        >
          <div>
            <img
              src={homeImage}
              alt="Home"
              style={{ width: "27%", cursor: "pointer" }}
              onClick={() => handleNavigation("/")}
            />
          </div>
          <StyledForm onSubmit={handleFormSubmit}>
            <StyledInput
              type="text"
              value={searchTerm}
              placeholder="Search city or postcode"
              onChange={handleInputChange}
            />
            <Button type="submit">
              <SearchSharpIcon />
            </Button>
          </StyledForm>
          {suggestedResults.length > 0 && (
            <List>
              {suggestedResults.map((result) => (
                <ListItem
                  button
                  key={result}
                  onClick={() => handleResultItemClick(result)}
                >
                  {result}
                </ListItem>
              ))}
            </List>
          )}
        </div>
      </StyledBox>
    </React.Fragment>
  );
};

export default Header;
