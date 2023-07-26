import { createContext, useEffect, useState } from "react";

export type ApiContextType = {
  searchText: string;
  updateSearchText: (newText: string) => void;
  weatherData: Object[] | null;
};

const ApiContext = createContext<ApiContextType | null>(null);

// @ts-ignore
const ApiContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState<string>("");
  const [weatherData, setWeatherData] = useState<Object[] | null>(null);

  const updateSearchText = (newText: string) => {
    setSearchText(newText);
  };

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Miskolc&appid=7bf7433367c9831b657558e210eb33cc"
    )
      .then((response) => response.json())
      .then((resultJson) => setWeatherData(resultJson))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ApiContext.Provider
      value={{
        searchText,
        updateSearchText,
        weatherData,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiContextProvider };
