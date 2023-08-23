import React from "react";
import { ApiContext, ApiContextType } from "../context-providers/ApiContext";
import WeatherIcons from "../utils/WeatherIcons";
import { styled } from "@mui/material";
import PageContainer from "../components/PageContainer";
import { useNavigate } from "react-router-dom";
import {
  getWindDirectionText,
  kelvinToCelsius,
  unixTimestampToLocaleTimeString,
} from "../utils/consts";

const WeatherDataContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "3rem",
  textAlign: "center",
  "& > *:not(:first-of-type)": {
    borderBottom: "1px solid #ccc",
    marginBottom: "0.2rem",
    paddingBottom: "0.2rem",
    width: "35%",
  },
});

const StyledButton = styled("div")({
  outline: "none",
  cursor: "pointer",
});

const StyledDataItem = styled("div")({
  fontSize: "1.2rem",
  fontWeight: "bold",
  margin: "0.1rem 0",
});

const Today = () => {
  const navigate = useNavigate();
  const navigateToHomepage = () => {
    navigate("/");
  };
  const { weatherData } = React.useContext(ApiContext) as ApiContextType;

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const StyledText = styled("div")({
    fontFamily: "monospace",
  });

  return (
    <>
      <PageContainer>
        <div
          style={{
            position: "absolute",
            backgroundImage:
              "url(https://tionimpo.sirv.com/Images/weatherwizbanner.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            top: "1rem",
            left: "12rem",
            right: "12rem",
            borderRadius: "1.5rem",
          }}
          aria-label=""
        >
          <StyledButton onClick={navigateToHomepage}>BACK</StyledButton>
          <StyledText>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "black",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Today's Weather in {weatherData.name}
            </div>

            <WeatherDataContainer>
              <WeatherIcons weather={weatherData.weather[0]} />
              <StyledDataItem>
                {weatherData.weather[0].description}
              </StyledDataItem>
              <StyledDataItem>
                Temperature: {kelvinToCelsius(weatherData.main.temp)}°C
              </StyledDataItem>
              <StyledDataItem>
                Min temp: {kelvinToCelsius(weatherData.main.temp_min || 0)}°C
                Max temp: {kelvinToCelsius(weatherData.main.temp_max || 0)}°C
              </StyledDataItem>
              <StyledDataItem>
                Real Feel: {kelvinToCelsius(weatherData.main.feels_like)}°C
              </StyledDataItem>
              <StyledDataItem>
                Humidity: {weatherData.main.humidity}%
              </StyledDataItem>
              <StyledDataItem>
                Pressure: {weatherData.main.pressure} hPa
              </StyledDataItem>
              <StyledDataItem>
                Wind Speed: {weatherData.wind.speed} m/s
              </StyledDataItem>
              <StyledDataItem>
                Wind Direction: {getWindDirectionText(weatherData.wind.deg)}
              </StyledDataItem>
              <StyledDataItem>
                Cloudiness: {weatherData.clouds.all}%
              </StyledDataItem>
              <StyledDataItem>
                Sunrise:{" "}
                {unixTimestampToLocaleTimeString(weatherData.sys.sunrise)}
              </StyledDataItem>
              <StyledDataItem>
                Sunset:{" "}
                {unixTimestampToLocaleTimeString(weatherData.sys.sunset)}
              </StyledDataItem>
            </WeatherDataContainer>
          </StyledText>
        </div>
      </PageContainer>
    </>
  );
};

export default Today;
