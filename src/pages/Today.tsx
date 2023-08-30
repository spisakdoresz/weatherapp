import React from "react";
import { ApiContext, ApiContextType } from "../context-providers/ApiContext";
import { styled } from "@mui/material";
import {
  getWindDirectionText,
  kelvinToCelsius,
  unixTimestampToLocaleTimeString,
} from "../utils/consts";

const WeatherDataContainer = styled("div")({
  padding: "25px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  "& > *:not(:last-of-type)": {
    borderBottom: "1px solid #ccc",
    marginBottom: "0.2rem",
    paddingBottom: "0.2rem",
    borderColor: "white",
    width: "30%",
  },
});

const StyledDataItem = styled("div")({
  fontSize: "1.2rem",
  fontWeight: "bold",
  margin: "0.1rem 0",
});

const StyledText = styled("div")({
  fontFamily: "monospace",
});

const Today = () => {
  const { weatherData } = React.useContext(ApiContext) as ApiContextType;

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div id="today">
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          color: "black",
          fontSize: "1.5rem",
          fontWeight: "bold",
          fontFamily: "monospace",
          marginTop: "3vh",
        }}
      >
        TODAY'S WEATHER IN {weatherData.name}
      </div>
      <div
        style={{
          marginTop: "3vh",
          backgroundImage:
            "url(https://tionimpo.sirv.com/Images/weatherwizbanner.png)",
          backgroundColor: "rgba(128, 128, 128, 0.3)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginLeft: "12rem",
          marginRight: "12rem",
          borderRadius: "1.5rem",
        }}
        aria-label=""
      >
        <StyledText>
          <WeatherDataContainer>
            <StyledDataItem>
              Min temp: {kelvinToCelsius(weatherData.main.temp_min || 0)}°C Max
              temp: {kelvinToCelsius(weatherData.main.temp_max || 0)}°C
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
              Sunset: {unixTimestampToLocaleTimeString(weatherData.sys.sunset)}
            </StyledDataItem>
          </WeatherDataContainer>
        </StyledText>
      </div>
    </div>
  );
};

export default Today;
