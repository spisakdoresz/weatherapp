// import React, { useState, useEffect, useContext } from "react";
// import { ApiContext, ApiContextType } from "../context-providers/ApiContext";

// const ForeCast = () => {
//   const API_KEY = "05a66915c31c9dbdc378a7a876e14c3c";
//   const { lastSuccessfulSearch } = useContext(ApiContext) as ApiContextType;

//   const [forecastData, setForecastData] = useState(null);

//   useEffect(() => {
//     if (lastSuccessfulSearch) {
//       fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${lastSuccessfulSearch}&appid=${API_KEY}`
//       )
//         .then((response) => response.json())
//         .then((resultJson) => {
//           const { coord } = resultJson;
//           const apiUrl = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${coord.lat}&lon=${coord.lon}&cnt=7&appid=${API_KEY}`;

//           fetch(apiUrl)
//             .then((response) => response.json())
//             .then((data) => {
//               setForecastData(data);
//             })
//             .catch((error) => {
//               console.error("Error fetching air quality data:", error);
//             });
//         })
//         .catch((error) => {
//           console.error("Error fetching forecast data:", error);
//         });
//     }
//   }, [lastSuccessfulSearch]);

//   return (
//     <div>
//       <h2>Weather Forecast</h2>
//       {forecastData && (
//         <div>
//           {/* Display forecast data here */}
//           <pre>{JSON.stringify(forecastData, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ForeCast;

import { useContext, useEffect, useState } from "react";
import {
  BasicCityWeatherContext,
  BasicCityWeatherContextType,
} from "../context-providers/BasicCityWeatherContext";
import { fahrenheitToCelsius, formatDate } from "../utils/consts";
import WeatherIcons from "../utils/WeatherIcons";
import { ForeCastWeather } from "../types";

const ForeCast = () => {
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
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=${apiKey}`;

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
    <div id="forecast">
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
        NEXT 15 DAYS FORECAST
      </div>
      {forecastData && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {forecastData.days?.slice(0, 15).map((day) => (
            <div
              key={day.datetime}
              style={{
                width: "70px",
                height: "400px",
                backgroundImage:
                  "url(https://tionimpo.sirv.com/Images/weatherwizbanner.png)",
                backgroundPosition: "right",

                margin: "5px",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "monospace",
                borderRadius: "1.5rem",
                marginTop: "3vh",
                fontWeight: "bold",
                fontSize: "1rem",
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
                <p> Description: {day.description}</p>
              </div>
              <div>
                <WeatherIcons weather={{ id: day.icon, icon: "clearday" }} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ForeCast;
