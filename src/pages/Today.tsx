import React from "react";
import {
  BasicCityWeatherContext,
  BasicCityWeatherContextType,
} from "../context-providers/BasicCityWeatherContext";
import { styled } from "@mui/material";
import {
  getWindDirectionText,
  kelvinToCelsius,
  unixTimestampToLocaleTimeString,
} from "../utils/utils";

const WeatherDataContainer = styled("div")({
  padding: "1.563rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  "& > *:not(:last-of-type)": {
    borderBottom: "0.063rem solid #ccc",
    marginBottom: "0.2rem",
    paddingBottom: "0.2rem",
    borderColor: "white",
    width: "25%",
  },
});

const StyledDataItem = styled("div")({
  fontSize: "1.2rem",
  fontWeight: "bold",
  margin: "0.1rem 0rem",
});

const StyledText = styled("div")({
  fontFamily: "monospace",
});

const Today = () => {
  const { weatherData } = React.useContext(
    BasicCityWeatherContext
  ) as BasicCityWeatherContextType;

  return (
    weatherData && (
      <div id="today" style={{ paddingTop: "6rem" }}>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            color: "black",
            fontSize: "1.5rem",
            fontWeight: "bold",
            fontFamily: "monospace",
          }}
        >
          TODAY'S WEATHER IN {weatherData.name}
        </div>
        <div
          style={{
            marginTop: "0.5rem",
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
                Min temp: {kelvinToCelsius(weatherData.main.temp_min || 0)}°C
              </StyledDataItem>
              <StyledDataItem>
                Max temp: {kelvinToCelsius(weatherData.main.temp_max || 0)}°C
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
      </div>
    )
  );
};

export default Today;
