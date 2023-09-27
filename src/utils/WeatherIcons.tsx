import React from "react";

interface WeatherIconProps {
  weather: {
    id: number | string;
    icon: string;
  };
}

const iconStyles = {
  width: "6.25rem",
  height: "6.25rem",
};

const WeatherIcons: React.FC<WeatherIconProps> = ({ weather }) => {
  const isDaytime = weather.icon.includes("d");
  //Weather icons are associated with two types of API calls.
  //The links to the codes work from the OpenWeather API call (for Today component),
  //while strings use the documentation from the Virtualcrossing website API call (for ForeCast & Hourly component).
  const weatherIcons: { [key: number | string]: string } = {
    //Codes for Today component:
    200: "https://tionimpo.sirv.com/Images/weatherapp/thunderstormDay.png",
    201: "https://tionimpo.sirv.com/Images/weatherapp/thunderstormDay.png",
    202: "https://tionimpo.sirv.com/Images/weatherapp/thunderstormDay.png",
    210: "https://tionimpo.sirv.com/Images/weatherapp/thunderstormDay.png",
    211: "https://tionimpo.sirv.com/Images/weatherapp/thunderstormDay.png",
    212: "https://tionimpo.sirv.com/Images/weatherapp/thunderstormDay.png",
    221: "https://tionimpo.sirv.com/Images/weatherapp/thunderstormDay.png",
    230: "https://tionimpo.sirv.com/Images/weatherapp/thunderstormDay.png",
    231: "https://tionimpo.sirv.com/Images/weatherapp/thunderstormDay.png",
    232: "https://tionimpo.sirv.com/Images/weatherapp/thunderstormDay.png",
    300: "https://tionimpo.sirv.com/Images/weatherapp/showerRainDay.png",
    301: "https://tionimpo.sirv.com/Images/weatherapp/showerRainDay.png",
    302: "https://tionimpo.sirv.com/Images/weatherapp/showerRainDay.png",
    310: "https://tionimpo.sirv.com/Images/weatherapp/showerRainDay.png",
    311: "https://tionimpo.sirv.com/Images/weatherapp/showerRainDay.png",
    312: "https://tionimpo.sirv.com/Images/weatherapp/showerRainDay.png",
    313: "https://tionimpo.sirv.com/Images/weatherapp/showerRainDay.png",
    314: "https://tionimpo.sirv.com/Images/weatherapp/showerRainDay.png",
    321: "https://tionimpo.sirv.com/Images/weatherapp/showerRainDay.png",
    500: "https://tionimpo.sirv.com/Images/weatherapp/rainDay.png",
    501: "https://tionimpo.sirv.com/Images/weatherapp/rainDay.png",
    502: "https://tionimpo.sirv.com/Images/weatherapp/rainDay.png",
    503: "https://tionimpo.sirv.com/Images/weatherapp/rainDay.png",
    504: "https://tionimpo.sirv.com/Images/weatherapp/rainDay.png",
    511: "https://tionimpo.sirv.com/Images/weatherapp/rainDay.png",
    520: "https://tionimpo.sirv.com/Images/weatherapp/showerRainDay.png",
    521: "https://tionimpo.sirv.com/Images/weatherapp/showerRainDay.png",
    522: "https://tionimpo.sirv.com/Images/weatherapp/showerRainDay.png",
    531: "https://tionimpo.sirv.com/Images/weatherapp/showerRainDay.png",
    600: "https://tionimpo.sirv.com/Images/weatherapp/snowDay.png",
    601: "https://tionimpo.sirv.com/Images/weatherapp/snowDay.png",
    602: "https://tionimpo.sirv.com/Images/weatherapp/snowDay.png",
    611: "https://tionimpo.sirv.com/Images/weatherapp/snowDay.png",
    612: "https://tionimpo.sirv.com/Images/weatherapp/snowDay.png",
    613: "https://tionimpo.sirv.com/Images/weatherapp/snowDay.png",
    615: "https://tionimpo.sirv.com/Images/weatherapp/snowDay.png",
    616: "https://tionimpo.sirv.com/Images/weatherapp/snowDay.png",
    620: "https://tionimpo.sirv.com/Images/weatherapp/snowDay.png",
    621: "https://tionimpo.sirv.com/Images/weatherapp/snowDay.png",
    622: "https://tionimpo.sirv.com/Images/weatherapp/snowDay.png",
    701: "https://tionimpo.sirv.com/Images/weatherapp/mistDay.png",
    711: "https://tionimpo.sirv.com/Images/weatherapp/mistDay.png",
    721: "https://tionimpo.sirv.com/Images/weatherapp/mistDay.png",
    731: "https://tionimpo.sirv.com/Images/weatherapp/mistDay.png",
    741: "https://tionimpo.sirv.com/Images/weatherapp/mistDay.png",
    751: "https://tionimpo.sirv.com/Images/weatherapp/mistDay.png",
    761: "https://tionimpo.sirv.com/Images/weatherapp/mistDay.png",
    762: "https://tionimpo.sirv.com/Images/weatherapp/mistDay.png",
    771: "https://tionimpo.sirv.com/Images/weatherapp/mistDay.png",
    781: "https://tionimpo.sirv.com/Images/weatherapp/mistDay.png",
    800: isDaytime
      ? "https://tionimpo.sirv.com/Images/weatherapp/clearDay.png"
      : "https://tionimpo.sirv.com/Images/weatherapp/clearNight.png",
    801: isDaytime
      ? "https://tionimpo.sirv.com/Images/weatherapp/fewCloudsDay.png"
      : "https://tionimpo.sirv.com/Images/weatherapp/fewCloudsNight.png",
    802: isDaytime
      ? "https://tionimpo.sirv.com/Images/weatherapp/scatteredCloudsDay.png"
      : "https://tionimpo.sirv.com/Images/weatherapp/scatteredCloudsNight.png",
    803: isDaytime
      ? "https://tionimpo.sirv.com/Images/weatherapp/brokenCloudsDay.png"
      : "https://tionimpo.sirv.com/Images/weatherapp/brokenCloudsNight.png",
    804: isDaytime
      ? "https://tionimpo.sirv.com/Images/weatherapp/brokenCloudsDay.png"
      : "https://tionimpo.sirv.com/Images/weatherapp/brokenCloudsNight.png",
    //Strings for ForeCast and Hourly components:
    "thunder-showers-day":
      "https://tionimpo.sirv.com/Images/weatherapp/thunderstormDay.png",
    "thunder-rain":
      "https://tionimpo.sirv.com/Images/weatherapp/thunderstormDay.png",
    "thunder-showers-night":
      "https://tionimpo.sirv.com/Images/weatherapp/thunderstormNight.png",
    "showers-day":
      "https://tionimpo.sirv.com/Images/weatherapp/showerRainDay.png",
    "showers-night":
      "https://tionimpo.sirv.com/Images/weatherapp/showerRainNight.png",
    rain: "https://tionimpo.sirv.com/Images/weatherapp/rainDay.png",
    snow: "https://tionimpo.sirv.com/Images/weatherapp/snowDay.png",
    "snow-showers-day":
      "https://tionimpo.sirv.com/Images/weatherapp/snowDay.png",
    "snow-showers-night":
      "https://tionimpo.sirv.com/Images/weatherapp/snowNight.png",
    wind: "https://tionimpo.sirv.com/Images/weatherapp/wind-14.png",
    "clear-day": "https://tionimpo.sirv.com/Images/weatherapp/clearDay.png",
    "clear-night": "https://tionimpo.sirv.com/Images/weatherapp/clearNight.png",
    "partly-cloudy-day":
      "https://tionimpo.sirv.com/Images/weatherapp/fewCloudsDay.png",
    "partly-cloudy-night":
      "https://tionimpo.sirv.com/Images/weatherapp/fewCloudsNight.png",
    cloudy:
      "https://tionimpo.sirv.com/Images/weatherapp/scatteredCloudsDay.png",
    fog: "https://tionimpo.sirv.com/Images/weatherapp/mistDay.png",
  };

  const iconPath = weatherIcons[weather.id];

  return (
    <div>
      {iconPath && <img src={iconPath} alt="Weather Icon" style={iconStyles} />}
    </div>
  );
};

export default WeatherIcons;
