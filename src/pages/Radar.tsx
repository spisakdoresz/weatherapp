import React, { useContext, useEffect } from "react";
import { MapApiContext } from "../components/mapApiContext";

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
    </div>
  );
};

export default Radar;
