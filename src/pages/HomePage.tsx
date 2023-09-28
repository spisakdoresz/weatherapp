import React from "react";
import {
  BasicCityWeatherContext,
  BasicCityWeatherContextType,
} from "../context-providers/BasicCityWeatherContext";
import WeatherSummary from "../components/WeatherSummary";
import Today from "./Today";
import AirQuality from "./AirQuality";
import Hourly from "./Hourly";
import ForeCast from "./ForeCast";

const HomePage = () => {
  const { weatherData } = React.useContext(
    BasicCityWeatherContext
  ) as BasicCityWeatherContextType;

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom, #ffffff, #FEC7A2)",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          color: "black",
          fontSize: "1.5rem",
          fontWeight: "bold",
          fontFamily: "monospace",
          marginTop: "1rem",
          paddingTop: "6rem",
        }}
      >
        CURRENT WEATHER
      </div>
      <WeatherSummary weatherData={weatherData} />
      <Today />
      <Hourly />
      <ForeCast />
      <AirQuality />
    </div>
  );
};

export default HomePage;
