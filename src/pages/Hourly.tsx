import React, { useContext, useEffect, useState } from "react";
import {
  BasicCityWeatherContext,
  BasicCityWeatherContextType,
} from "../context-providers/BasicCityWeatherContext";

const Hourly = () => {
  const { lastSuccessfulSearch } = useContext(
    BasicCityWeatherContext
  ) as BasicCityWeatherContextType;
  const [forecastData, setForecastData] = useState(null);
  useEffect(() => {
    if (!lastSuccessfulSearch) {
      return;
    }

    const apiKey = "9CHYZKME2JKSMQAH86EQMBB5Z";
    const location = lastSuccessfulSearch;
    const date1 = "2020-10-19T13:00:00";
    const date2 = "2020-10-19T13:00:00";
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

  return (
    <div>
      <h2>Weather Forecast</h2>
      {forecastData ? (
        <pre>{JSON.stringify(forecastData, null, 2)}</pre>
      ) : (
        <p>Loading forecast data...</p>
      )}
    </div>
  );
};

export default Hourly;
