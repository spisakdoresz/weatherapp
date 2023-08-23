import WeatherIcons from "../utils/WeatherIcons";
import { WeatherData } from "../types";

interface WeatherSummaryProps {
  weatherData: WeatherData | null;
}

const WeatherSummary = ({ weatherData }: WeatherSummaryProps) => {
  if (weatherData && weatherData.main) {
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
            <div style={{ fontSize: "25px" }}>
              Real feel: {Math.round(weatherData.main.feels_like - 273.15)}°C
            </div>
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
              <div style={{ fontSize: "24px" }}>
                Humidity: {weatherData.main.humidity}%
              </div>
              <div style={{ margin: "15px 0" }} />
              <div style={{ fontSize: "24px" }}>
                Wind Speed: {weatherData.wind.speed} m/s
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
};

export default WeatherSummary;
