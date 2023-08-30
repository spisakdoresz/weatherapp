import WeatherIcons from "../utils/WeatherIcons";
import { WeatherData } from "../types";
import { styled } from "@mui/material";

const StyledText = styled("div")({
  fontFamily: "monospace",
});

interface WeatherSummaryProps {
  weatherData: WeatherData | null;
}

const WeatherSummary = ({ weatherData }: WeatherSummaryProps) => {
  if (weatherData && weatherData.main) {
    const isWeatherDataNotNull = weatherData && weatherData.main;
    return (
      isWeatherDataNotNull && (
        <>
          <StyledText>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  backgroundImage: `url("https://tionimpo.sirv.com/Images/weatherwizbanner.png")`,
                  backgroundPosition: "left",
                  padding: "25px",
                  borderRadius: "20px",
                  marginLeft: "55px",
                }}
              >
                <div style={{ fontSize: "60px", fontWeight: "bold" }}>
                  {Math.round(weatherData.main.temp - 273.15)}°C
                </div>
                <div style={{ fontSize: "25px" }}>
                  Real feel: {Math.round(weatherData.main.feels_like - 273.15)}
                  °C
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                {weatherData &&
                  weatherData.weather &&
                  weatherData.weather.length > 0 && (
                    <div
                      style={
                        {
                          // alignItems: "left",
                        }
                      }
                    >
                      {weatherData && (
                        <WeatherIcons weather={weatherData.weather[0]} />
                      )}
                    </div>
                  )}
                {weatherData.weather[0].description}
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
                    backgroundImage: `url("https://tionimpo.sirv.com/Images/weatherwizbanner.png")`,
                    backgroundPosition: "left",
                    padding: "25px",
                    borderRadius: "20px",
                    marginRight: "55px",
                  }}
                >
                  <div style={{ fontSize: "24px" }}>
                    Cloudiness: {weatherData.clouds.all}%
                  </div>
                  <div style={{ margin: "20px 0" }} />
                  <div style={{ fontSize: "24px" }}>
                    Wind Speed: {weatherData.wind.speed} m/s
                  </div>
                </div>
              </div>
            </div>
          </StyledText>
        </>
      )
    );
  }
};

export default WeatherSummary;
