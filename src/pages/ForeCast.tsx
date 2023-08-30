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

import { useEffect, useState } from "react";

const ForeCast = () => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const apiKey = "D9L0k9UX2AY8ZNncRZ43ulGcP7jcxEBE";
    const location = "new york";
    const apiUrl = `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setForecastData(data);
      })
      .catch((error) => {
        console.error("Error fetching forecast data:", error);
      });
  }, []);

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
