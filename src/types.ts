export interface WeatherData {
  cod?: number;
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
  weather: WeatherCondition[];
  clouds: {
    all: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
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

export interface AirQualityData {
  coord: {
    lon: number;
    lat: number;
  };
  list: {
    main: {
      aqi: number;
    };
    components: {
      co: number;
      no: number;
      no2: number;
      o3: number;
      so2: number;
      pm2_5: number;
      pm10: number;
      nh3: number;
    };
    dt: number;
  }[];
  city: {
    name: string;
    country: string;
  };
}
