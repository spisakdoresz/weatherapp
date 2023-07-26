import { createContext, useEffect, useState } from "react";

export type ApiContextType = {
  searchText: string;
  setSearchText: (newText: string) => void;
  weatherData: Object[] | null;
};

const ApiContext = createContext<ApiContextType | null>(null);

// @ts-ignore
const ApiContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState<string>("");
  const [weatherData, setWeatherData] = useState<Object[] | null>(null);

  useEffect(() => {
    fetch(
      "https://archive-api.open-meteo.com/v1/archive?latitude=48.1031&longitude=20.7781&start_date=2023-06-30&end_date=2023-07-14&hourly=temperature_2m"
    )
      .then((response) => response.json())
      .then((resultJson) => setWeatherData(resultJson));
  }, []);

  return (
    <ApiContext.Provider
      value={{
        searchText,
        setSearchText,
        weatherData,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiContextProvider };
