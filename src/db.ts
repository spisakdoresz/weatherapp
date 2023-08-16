export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
    pressure: number;
    temp_min?: number;
    temp_max?: number;
  };
  coord: {
    lon: number;
    lat: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  rain?: {
    "1h": number;
  };
  snow?: {
    "1h": number;
  };
  weather: WeatherCondition[];
  clouds: {
    all: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
  uvi: number;
  visibility: number;
  sunrise?: number;
  sunset?: number;
  dew_point?: number;
}

export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MapWeatherData {
  coord: MapWeatherData | null;
  layer: string;
  x: number;
  z: number;
  y: number;
  appid: string;
  lon: number;
  lat: number;
}
