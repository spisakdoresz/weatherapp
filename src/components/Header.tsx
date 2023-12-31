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
  left: "12rem",
  right: "12rem",
  padding: "0rem 12rem",
});

const Header = () => {
  const navigate = useNavigate();
  const { weatherData, loading } = React.useContext(
    BasicCityWeatherContext
  ) as BasicCityWeatherContextType;

  return (
    <>
      <HeaderContainer
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 100 }}
      >
        <StyledBox>
          <div>
            <img
              src={homeImage}
              alt="Home"
              style={{ width: "13rem", cursor: "pointer" }}
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
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
            {!loading && weatherData && (
              <>
                {weatherData.name} |{" "}
                {Math.round(weatherData.main.temp - 273.15)}
                °C
              </>
            )}
          </div>
          <div>
            <SearchBar />
          </div>
        </StyledBox>
      </HeaderContainer>
    </>
  );
};

export default Header;
