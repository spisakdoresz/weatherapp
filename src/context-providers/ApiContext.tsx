import { createContext, useEffect, useState } from "react";
import { WeatherData } from "../db";

export type ApiContextType = {
  searchText: string;
  updateSearchText: (newText: string) => void;
  weatherData: WeatherData | null;
  loading: boolean;
  // pressure: number;
  // sunrise: number;
  // sunset: number;
  // dew_point: number;
  // visibility: number;
  // uvi: number;
  // wind: {
  //   speed: number;
  //   deg: number;
  // };
  // clouds: {
  //   all: number;
  // };
  // rain: {
  //   "1h": number;
  // };
  // snow: {
  //   "1h": number;
  // };
  // cityLatitude: number;
  // cityLongitude: number;
};

const defaultWeatherData: WeatherData = {
  name: "City Name",
  main: {
    temp: 0,
    humidity: 0,
    feels_like: 0,
    pressure: 0,
    temp_min: 0,
    temp_max: 0,
  },
  coord: {
    lon: 0,
    lat: 0,
  },
  wind: {
    speed: 0,
    deg: 0,
  },
  rain: {
    "1h": 0,
  },
  weather: [
    {
      id: 0,
      main: "",
      description: "",
      icon: "",
    },
  ],
  snow: {
    "1h": 0,
  },
  clouds: {
    all: 0,
  },
  sys: {
    sunrise: 0,
    sunset: 0,
  },
  uvi: 0,
  visibility: 0,
  sunrise: 0,
  sunset: 0,
  dew_point: 0,
};

const ApiContext = createContext<ApiContextType | null>(null);

// @ts-ignore
const ApiContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [cityLatitude, setCityLatitude] = useState<number>(0);
  const [cityLongitude, setCityLongitude] = useState<number>(0);

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
      .then((resultJson) => {
        setWeatherData(resultJson);
        setLoading(false);

        // Összes válaszadat kiírása a konzolba
        console.log("API Response:", resultJson);
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
        // weatherData,
        weatherData: weatherData || defaultWeatherData,
        loading,
        // pressure: 0,
        // sunrise: 0,
        // sunset: 0,
        // dew_point: 0,
        // visibility: 0,
        // uvi: 0,
        // wind: {
        //   speed: 0,
        //   deg: 0,
        // },
        // clouds: {
        //   all: 0,
        // },
        // rain: {
        //   "1h": 0,
        // },
        // snow: {
        //   "1h": 0,
        // },
        // cityLatitude: 0,
        // cityLongitude: 0,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiContextProvider };
