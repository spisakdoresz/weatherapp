import React from "react";
import {
  BasicCityWeatherContext,
  BasicCityWeatherContextType,
} from "../context-providers/BasicCityWeatherContext";
import WeatherSummary from "../components/WeatherSummary";
import PageContainer from "../components/PageContainer";
import Today from "./Today";
import AirQuality from "./AirQuality";
import Hourly from "./Hourly";
import ForeCast from "./ForeCast";

const HomePage = () => {
  const { weatherData } = React.useContext(
    BasicCityWeatherContext
  ) as BasicCityWeatherContextType;

  return (
    <>
      <PageContainer>
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
          CURRENT WEATHER
        </div>
        <div
          style={{
            backgroundColor: "rgba(100, 100, 100, 0.2)",
            backgroundPosition: "center",
            borderRadius: "1.5rem",
            marginLeft: "12rem",
            marginRight: "12rem",
            marginTop: "1rem",
            padding: "1rem",
          }}
          aria-label=""
        >
          <WeatherSummary weatherData={weatherData} />
        </div>
        <Today />
        <Hourly />
        <ForeCast />
        {/* <Radar /> */}
        <AirQuality />
      </PageContainer>
    </>
  );
};

export default HomePage;
