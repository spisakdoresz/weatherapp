import { useContext, useEffect, useState } from "react";
import {
  BasicCityWeatherContext,
  BasicCityWeatherContextType,
} from "../context-providers/BasicCityWeatherContext";

const ForeCast = () => {
  const { lastSuccessfulSearch } = useContext(
    BasicCityWeatherContext
  ) as BasicCityWeatherContextType;
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    if (!lastSuccessfulSearch) {
      return;
    }

    const apiKey = "D9L0k9UX2AY8ZNncRZ43ulGcP7jcxEBE";
    const location = lastSuccessfulSearch;
    const apiUrl = `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${apiKey}`;

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

export default ForeCast;
