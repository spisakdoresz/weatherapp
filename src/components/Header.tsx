import React from "react";
import homeImage from "/logo.png";
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import {
  BasicCityWeatherContext,
  BasicCityWeatherContextType,
} from "../context-providers/BasicCityWeatherContext";

const HeaderContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#BB8995",
  alignItems: "center",
});

const StyledBox = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: "1200px",
  padding: "0 200px",
});

const Header = () => {
  const navigate = useNavigate();
  const { weatherData, loading } = React.useContext(
    BasicCityWeatherContext
  ) as BasicCityWeatherContextType;

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <React.Fragment>
      <HeaderContainer>
        <StyledBox>
          <div>
            <img
              src={homeImage}
              alt="Home"
              style={{ width: "200px", cursor: "pointer" }}
              onClick={() => handleNavigation("/")}
            />
          </div>
          <div
            style={{
              flex: 1,
              textAlign: "center",
              fontFamily: "monospace",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            {loading ? (
              "Find your city"
            ) : weatherData && weatherData.main ? (
              <>
                {weatherData.name} |{" "}
                {Math.round(weatherData.main.temp - 273.15)}
                °C
              </>
            ) : (
              "No available weather data."
            )}
          </div>
          <div>
            <SearchBar />
          </div>
        </StyledBox>
      </HeaderContainer>
    </React.Fragment>
  );
};

export default Header;
