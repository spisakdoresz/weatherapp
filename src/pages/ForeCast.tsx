import { useContext, useEffect, useState } from "react";
import {
  BasicCityWeatherContext,
  BasicCityWeatherContextType,
} from "../context-providers/BasicCityWeatherContext";
import { fahrenheitToCelsius, formatDate } from "../utils/utils";
import WeatherIcons from "../utils/WeatherIcons";
import Tooltip from "@material-ui/core/Tooltip";
import { ForeCastWeather } from "../types";

const ForeCast = () => {
  const { lastSuccessfulSearch } = useContext(
    BasicCityWeatherContext
  ) as BasicCityWeatherContextType;
  const [forecastData, setForecastData] = useState<ForeCastWeather | null>(
    null
  );

  useEffect(() => {
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lastSuccessfulSearch}?unitGroup=us&key=${
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
    <div id="forecast" style={{ paddingTop: "6rem" }}>
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
        NEXT 15 DAYS FORECAST
      </div>
      {forecastData && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "0.5rem",
          }}
        >
          {forecastData.days.slice(0, 15).map((day) => (
            <div
              key={day.datetime}
              style={{
                marginTop: "1rem",
                width: "4.375rem",
                height: "auto",
                backgroundImage:
                  "url(https://tionimpo.sirv.com/Images/weatherwizbanner.png)",
                backgroundPosition: "right",
                margin: "0.313rem",
                padding: "0.1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "monospace",
                borderRadius: "1.5rem",
                fontWeight: "bold",
              }}
            >
              <div>
                <p>{formatDate(day.datetime)}</p>
              </div>
              <div
                style={{
                  backgroundColor: "#FEC7A2",
                  borderRadius: "10rem",
                }}
              >
                <p>{fahrenheitToCelsius(day.tempmax)}°C</p>
              </div>
              <div
                style={{ backgroundColor: "lightgrey", borderRadius: "10rem" }}
              >
                <p>{fahrenheitToCelsius(day.tempmin)}°C</p>
              </div>
              <div>
                <Tooltip title={day.description}>
                  <div style={{ cursor: "pointer" }}>
                    <WeatherIcons
                      weather={{ id: day.icon, icon: "clearday" }}
                    />
                  </div>
                </Tooltip>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ForeCast;
