import React from "react";
import { ApiContext, ApiContextType } from "../context-providers/ApiContext";
import WeatherIcons from "../WeatherIcons";
import { styled } from "@mui/material";

const Today = () => {
  const { weatherData } = React.useContext(ApiContext) as ApiContextType;

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const temperatureCelsius = Math.round(weatherData.main.temp - 273.15);
  const realFeel = Math.round(weatherData.main.feels_like - 273.15);
  const firstWeatherCondition = weatherData.weather[0];
  const description = firstWeatherCondition.description;
  const humidity = weatherData.main.humidity;
  const pressure = weatherData.main.pressure;
  const minTemp = Math.round((weatherData.main.temp_min || 0) - 273.15);
  const maxTemp = Math.round((weatherData.main.temp_max || 0) - 273.15);
  const windSpeed = weatherData.wind.speed;
  const windDirection = weatherData.wind.deg;
  const cloudiness = weatherData.clouds.all;
  const rainInLastHour = weatherData.rain?.["1h"];
  const snowInLastHour = weatherData.snow?.["1h"];
  const uvIndex = weatherData.uvi;
  const visibility = weatherData.visibility;
  const sunrise = weatherData.sunrise
    ? new Date(weatherData.sunrise * 1000).toLocaleTimeString()
    : "";
  const sunset = weatherData.sunset
    ? new Date(weatherData.sunset * 1000).toLocaleTimeString()
    : "";
  const dewPoint = weatherData.dew_point;
  const StyledText = styled("div")({
    fontFamily: "monospace",
  });

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

  const DataItem = styled("div")({
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "0.1rem 0",
  });

  return (
    <>
      <div
        style={{
          position: "relative",
          backgroundImage: "linear-gradient(to bottom, #ffffff, #FEC7A2)",
          width: "100%",
          height: "100vh",
        }}
      >
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
              <DataItem>{description}</DataItem>
              <DataItem>Temperature: {temperatureCelsius}°C</DataItem>
              <DataItem>
                Min temp: {minTemp}°C Max temp: {maxTemp}°C
              </DataItem>
              <DataItem>Real Feel: {realFeel}°C</DataItem>
              <DataItem>Humidity: {humidity}%</DataItem>
              <DataItem>Pressure: {pressure} hPa</DataItem>
              <DataItem>Wind Speed: {windSpeed} m/s</DataItem>
              <DataItem>Wind Direction: {windDirection}°</DataItem>
              <DataItem>Cloudiness: {cloudiness}%</DataItem>
              <DataItem>
                Rain in the last hour: {rainInLastHour || "N/A"} mm
              </DataItem>
              <DataItem>
                Snow in the last hour: {snowInLastHour || "N/A"} mm
              </DataItem>
              <DataItem>UV Index: {uvIndex}</DataItem>
              <DataItem>Visibility: {visibility} meters</DataItem>
              <DataItem>Sunrise: {sunrise}</DataItem>
              <DataItem>Sunset: {sunset}</DataItem>
              <DataItem>Dew Point: {dewPoint}°C</DataItem>
            </WeatherDataContainer>
          </StyledText>
        </div>
      </div>
    </>
  );
};

export default Today;
