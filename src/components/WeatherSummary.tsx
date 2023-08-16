import WeatherIcons from "../utils/WeatherIcons";
import { WeatherData } from "../types";

interface WeatherSummaryProps {
  weatherData: WeatherData | null;
}

const WeatherSummary = ({ weatherData }: WeatherSummaryProps) => {
  if (weatherData && weatherData.main) {
    const temperatureCelsius = Math.round(weatherData.main.temp - 273.15);
    const realFeel = Math.round(weatherData.main.feels_like - 273.15);
    const humidity = weatherData.main.humidity;
    const windSpeed = weatherData.wind.speed;
    const rain = weatherData.rain?.["1h"];

    const isWeatherDataNotNull = weatherData && weatherData.main;
    return (
      isWeatherDataNotNull && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15vh",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              backgroundColor: "rgba(128, 128, 128, 0.3)",
              padding: "25px",
              borderRadius: "20px",
              marginLeft: "55px",
            }}
          >
            <div>
              {weatherData &&
                weatherData.weather &&
                weatherData.weather.length > 0 && (
                  <div
                    style={{
                      alignItems: "left",
                    }}
                  >
                    {weatherData && (
                      <WeatherIcons weather={weatherData.weather[0]} />
                    )}
                  </div>
                )}
            </div>
            <div style={{ fontSize: "60px", fontWeight: "bold" }}>
              {Math.round(weatherData.main.temp - 273.15)}°C
            </div>
            <div style={{ fontSize: "25px" }}>Real feel: {realFeel}°C</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                backgroundColor: "rgba(128, 128, 128, 0.3)",
                padding: "25px",
                borderRadius: "20px",
                marginRight: "55px",
              }}
            >
              <div style={{ fontSize: "24px" }}>Humidity: {humidity}%</div>
              <div style={{ margin: "15px 0" }} />
              <div style={{ fontSize: "24px" }}>
                Wind Speed: {windSpeed} m/s
              </div>
              <div style={{ margin: "15px 0" }} />
              <div style={{ fontSize: "24px" }}>
                Rain: {rain ? `${rain} mm` : "N/A"}
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
};

export default WeatherSummary;
