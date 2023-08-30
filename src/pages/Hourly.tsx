import React, { useContext, useEffect, useState } from "react";
import {
  BasicCityWeatherContext,
  BasicCityWeatherContextType,
} from "../context-providers/BasicCityWeatherContext";
import { fahrenheitToCelsius, formatTime } from "../utils/consts";

const Hourly = () => {
  const { lastSuccessfulSearch } = useContext(
    BasicCityWeatherContext
  ) as BasicCityWeatherContextType;
  const [forecastData, setForecastData] = useState<any | null>(null);

  useEffect(() => {
    if (!lastSuccessfulSearch) {
      return;
    }

    const apiKey = "9CHYZKME2JKSMQAH86EQMBB5Z";
    const location = lastSuccessfulSearch;

    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setForecastData(data);
      })
      .catch((error) => {
        console.error("Error fetching forecast data:", error);
      });
  }, [lastSuccessfulSearch]);

  const getCurrentHour = () => {
    const currentDateTime = new Date();
    return currentDateTime.getHours();
  };

  return (
    <div id="hourly">
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
        HOURLY
      </div>
      {forecastData && forecastData.days[0].hours ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {forecastData.days[0].hours
            .slice(getCurrentHour(), getCurrentHour() + 8)
            .map((hour, index) => (
              <div
                key={index}
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundImage: `url("https://tionimpo.sirv.com/Images/weatherwizbanner.png")`,
                  backgroundPosition: "left",
                  margin: "5px",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "monospace",
                  borderRadius: "1.5rem",
                  marginTop: "3vh",
                }}
              >
                <div>
                  <p>{formatTime(hour.datetime)}</p>
                </div>
                <div>
                  <p>{fahrenheitToCelsius(hour.temp)}°C</p>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <p>Loading forecast data...</p>
      )}
    </div>
  );
};

export default Hourly;
