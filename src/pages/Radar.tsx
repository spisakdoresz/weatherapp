import React, { useContext, useEffect } from "react";
import { MapApiContext } from "../context-providers/mapApiContext";

const Radar = () => {
  const mapApiContext = useContext(MapApiContext);

  if (!mapApiContext) {
    return <div>Loading...</div>;
  }

  const { mapWeatherData, fetchMapWeatherData } = mapApiContext;

  useEffect(() => {
    if (mapWeatherData) {
      fetchMapWeatherData(mapWeatherData.lat, mapWeatherData.lon);
    }
  }, [mapWeatherData]);

  return (
    <div>
      {mapWeatherData && (
        <img
          src={`https://tile.openweathermap.org/map/${mapWeatherData.layer}/${mapWeatherData.z}/${mapWeatherData.x}/${mapWeatherData.y}.png?appid=05a66915c31c9dbdc378a7a876e14c3c`}
          alt="Weather Map"
        />
      )}
      <iframe
        src="http://www.zoomforecast.com/zoomradar_weather_map/weather_image_user.php?key=QqKbiO1WI2CAo9g"
        width="600"
        height="500"
        // style="border:0"
        frameBorder="0"
        // seamless="seamless"
        scrolling="no"
        // allowfullscreen="true"
      ></iframe>
    </div>
  );
};

export default Radar;
