import React from "react";
import { ApiContextType } from "../context-providers/ApiContext";
import HomeBackGround from "../components/HomeBackGround";

const Home = () => {
  const weatherData: ApiContextType["weatherData"] = {
    name: "City Name",
    main: {
      temp: 25,
      humidity: 60,
      feels_like: 0,
      pressure: 1015,
      temp_min: 0,
      temp_max: 0,
    },
    rain: {
      "1h": 5,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    wind: {
      speed: 0,
      deg: 0,
    },
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
    coord: {
      lon: 0,
      lat: 0,
    },
  };

  const loading: ApiContextType["loading"] = false;

  return (
    <div>
      <HomeBackGround
        imagePath="https://tionimpo.sirv.com/Images/weatherwizbanner.png"
        altText="WeatherWiz"
        weatherData={weatherData}
        loading={loading}
      />
    </div>
  );
};

export default Home;
