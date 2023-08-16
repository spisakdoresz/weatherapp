import { createContext, useEffect, useState } from "react";
import { WeatherData } from "../types";

export type ApiContextType = {
  searchText: string;
  updateSearchText: (newText: string) => void;
  weatherData: WeatherData | null;
  loading: boolean;
};

const ApiContext = createContext<ApiContextType | null>(null);

// @ts-ignore
const ApiContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState<string>("Budapest");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const updateSearchText = (newText: string) => {
    setSearchText(newText);
  };

  useEffect(() => {
    if (searchText === "") return; // Skip API call if searchText is empty
    setLoading(true); // Start loading
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=05a66915c31c9dbdc378a7a876e14c3c`
    )
      .then((response) => response.json())
      .then((resultJson: WeatherData) => {
        setWeatherData(resultJson);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [searchText]);

  return (
    <ApiContext.Provider
      value={{
        searchText,
        updateSearchText,
        weatherData: weatherData,
        loading,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiContextProvider };
