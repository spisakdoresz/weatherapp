import { createContext, useContext, useEffect, useState } from "react";
import { MapWeatherData } from "../types";

export type MapApiContextType = {
  mapWeatherData: MapWeatherData | null;
  loading: boolean;
  fetchMapWeatherData: (latitude: number, longitude: number) => void;
};

const defaultMapWeatherData: MapWeatherData = {
  layer: "clouds_new",
  x: 0,
  z: 0,
  y: 0,
  lon: 0,
  lat: 0,
  coord: null,
  appid: "",
};

const MapApiContext = createContext<MapApiContextType | null>(null);

// @ts-ignore
const MapApiContextProvider = ({ children }) => {
  const [mapWeatherData, setMapWeatherData] = useState<MapWeatherData | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);

  const fetchMapWeatherData = (latitude: number, longitude: number) => {
    setLoading(true);

    const layer = "clouds_new";
    const z = 10;
    const x = 5;
    const y = 10;

    fetch(
      `https://tile.openweathermap.org/map/${layer}/${z}/${x}/${y}.png?appid=05a66915c31c9dbdc378a7a876e14c3c`
    )
      .then((response) => response.json())
      .then((resultJson) => {
        setMapWeatherData({
          layer: layer,
          z: z,
          x: x,
          y: y,
          appid: "05a66915c31c9dbdc378a7a876e14c3c",
          lon: longitude,
          lat: latitude,
          coord: null,
        });
        setLoading(false);
        console.log("API Map Response:", resultJson);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <MapApiContext.Provider
      value={{
        mapWeatherData: mapWeatherData || defaultMapWeatherData,
        loading,
        fetchMapWeatherData,
      }}
    >
      {children}
    </MapApiContext.Provider>
  );
};

export { MapApiContext, MapApiContextProvider };
