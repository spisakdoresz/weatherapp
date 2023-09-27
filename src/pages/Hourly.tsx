import { useContext, useEffect, useState } from "react";
import {
  BasicCityWeatherContext,
  BasicCityWeatherContextType,
} from "../context-providers/BasicCityWeatherContext";
import { fahrenheitToCelsius, formatTime } from "../utils/consts";
import WeatherIcons from "../utils/WeatherIcons";
import { ForeCastWeather } from "../types";

const Hourly = () => {
  const { lastSuccessfulSearch } = useContext(
    BasicCityWeatherContext
  ) as BasicCityWeatherContextType;
  const [forecastData, setForecastData] = useState<ForeCastWeather | null>(
    null
  );

  useEffect(() => {
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lastSuccessfulSearch}?key=${
      import.meta.env.VITE_HOURLY_APPID
    }`;

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
    <div id="hourly" style={{ paddingTop: "6rem" }}>
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
        NEXT 6 HOURS FORECAST
      </div>
      {forecastData && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "0.5rem",
          }}
        >
          {forecastData.days[0].hours
            .slice(new Date().getHours(), new Date().getHours() + 6)
            .map((hour) => (
              <div
                key={hour.datetime}
                style={{
                  height: "auto",
                  backgroundImage: `url("https://tionimpo.sirv.com/Images/weatherwizbanner.png")`,
                  backgroundPosition: "left",
                  margin: "0.5rem",
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "monospace",
                  borderRadius: "1.5rem",
                }}
              >
                <div>
                  <p>{formatTime(hour.datetime)}</p>
                </div>
                <div>
                  <WeatherIcons weather={{ id: hour.icon, icon: "clearday" }} />
                </div>
                <div>
                  <p>{fahrenheitToCelsius(hour.temp)}°C</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Hourly;
