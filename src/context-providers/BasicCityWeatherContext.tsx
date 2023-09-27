import { createContext, useEffect, useState } from "react";
import { WeatherData } from "../types";

export type BasicCityWeatherContextType = {
  searchText: string;
  updateSearchText: (newText: string) => void;
  weatherData: WeatherData | null;
  loading: boolean;
  lastSuccessfulSearch: string;
};

const BasicCityWeatherContext =
  createContext<BasicCityWeatherContextType | null>(null);

const DEFAULT_CITY = "Budapest";

// @ts-ignore
const BasicCityWeatherContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState<string>(DEFAULT_CITY);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [lastSuccessfulSearch, setLastSuccessfulSearch] =
    useState<string>(DEFAULT_CITY);

  const updateSearchText = (newText: string) => {
    setSearchText(newText);
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${
        import.meta.env.VITE_APPID
      }`
    )
      .then((response) => response.json())
      .then((resultJson: WeatherData) => {
        if (resultJson.cod === 200) {
          setWeatherData(resultJson);
          setLastSuccessfulSearch(searchText);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, [searchText, lastSuccessfulSearch]);

  return (
    <BasicCityWeatherContext.Provider
      value={{
        searchText,
        updateSearchText,
        weatherData,
        lastSuccessfulSearch,
        loading,
      }}
    >
      {children}
    </BasicCityWeatherContext.Provider>
  );
};

export { BasicCityWeatherContext, BasicCityWeatherContextProvider };
