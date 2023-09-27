import { useContext, useEffect, useState } from "react";
import {
  BasicCityWeatherContext,
  BasicCityWeatherContextType,
} from "../context-providers/BasicCityWeatherContext";
import { fahrenheitToCelsius, formatTime } from "../utils/consts";
import WeatherIcons from "../utils/WeatherIcons";

const Hourly = () => {
  const { lastSuccessfulSearch } = useContext(
    BasicCityWeatherContext
  ) as BasicCityWeatherContextType;
  const [forecastData, setForecastData] = useState<any | null>(null);

  useEffect(() => {
    if (!lastSuccessfulSearch) {
      return;
    }

    const location = lastSuccessfulSearch;

    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${
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

  const getCurrentHour = () => {
    const currentDateTime = new Date();
    return currentDateTime.getHours();
  };

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
      {forecastData && forecastData.days[0].hours ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "0.5rem",
          }}
        >
          {forecastData.days[0].hours
            .slice(getCurrentHour(), getCurrentHour() + 6)
            .map((hour: any, index: any) => (
              <div
                key={index}
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
      ) : (
        <p>Loading forecast data...</p>
      )}
    </div>
  );
};

export default Hourly;
