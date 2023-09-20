import React from "react";

interface WeatherIconProps {
  weather: {
    id: number;
    icon: string;
  };
}

const iconStyles = {
  width: "100px",
  height: "100px",
};

const WeatherIcons: React.FC<WeatherIconProps> = ({ weather }) => {
  const isDaytime = weather.icon.includes("d");
  const weatherIcons: { [key: number | string]: string } = {
    200: "https://tionimpo.sirv.com/Images/weatherapp/thunderstormDay.png",
    thundershowersday:
      "https://tionimpo.sirv.com/Images/weatherapp/thunderstormDay.png",
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
    showersday: "https://tionimpo.sirv.com/Images/weatherapp/showerRainDay.png",
    500: "https://tionimpo.sirv.com/Images/weatherapp/rainDay.png",
    501: "https://tionimpo.sirv.com/Images/weatherapp/rainDay.png",
    502: "https://tionimpo.sirv.com/Images/weatherapp/rainDay.png",
    503: "https://tionimpo.sirv.com/Images/weatherapp/rainDay.png",
    504: "https://tionimpo.sirv.com/Images/weatherapp/rainDay.png",
    511: "https://tionimpo.sirv.com/Images/weatherapp/rainDay.png",
    rain: "https://tionimpo.sirv.com/Images/weatherapp/rainDay.png",
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
    snow: "https://tionimpo.sirv.com/Images/weatherapp/snowDay.png",
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
    fog: "https://tionimpo.sirv.com/Images/weatherapp/mistDay.png",
    800: isDaytime
      ? "https://tionimpo.sirv.com/Images/weatherapp/clearDay.png"
      : "https://tionimpo.sirv.com/Images/weatherapp/clearNight.png",
    clearday: "https://tionimpo.sirv.com/Images/weatherapp/clearDay.png",
    clearnight: "https://tionimpo.sirv.com/Images/weatherapp/clearDay.png",
    801: isDaytime
      ? "https://tionimpo.sirv.com/Images/weatherapp/fewCloudsDay.png"
      : "https://tionimpo.sirv.com/Images/weatherapp/fewCloudsNight.png",
    partlycloudyday:
      "https://tionimpo.sirv.com/Images/weatherapp/fewCloudsDay.png",
    partlycloudynight:
      "https://tionimpo.sirv.com/Images/weatherapp/fewCloudsDay.png",
    802: isDaytime
      ? "https://tionimpo.sirv.com/Images/weatherapp/scatteredCloudsDay.png"
      : "https://tionimpo.sirv.com/Images/weatherapp/scatteredCloudsNight.png",
    803: isDaytime
      ? "https://tionimpo.sirv.com/Images/weatherapp/brokenCloudsDay.png"
      : "https://tionimpo.sirv.com/Images/weatherapp/brokenCloudsNight.png",
    804: isDaytime
      ? "https://tionimpo.sirv.com/Images/weatherapp/brokenCloudsDay.png"
      : "https://tionimpo.sirv.com/Images/weatherapp/brokenCloudsNight.png",
  };

  const iconPath = weatherIcons[weather.id] || null;

  return (
    <div>
      {iconPath && <img src={iconPath} alt="Weather Icon" style={iconStyles} />}
    </div>
  );
};

export default WeatherIcons;
