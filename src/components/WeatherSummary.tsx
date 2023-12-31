import WeatherIcons from "../utils/WeatherIcons";
import { WeatherData } from "../types";
import { styled } from "@mui/material";
import { kelvinToCelsius } from "../utils/utils";

const StyledText = styled("div")({
  fontFamily: "monospace",
});

interface WeatherSummaryProps {
  weatherData: WeatherData | null;
}

const WeatherSummary = ({ weatherData }: WeatherSummaryProps) => {
  return (
    weatherData && (
      <>
        <div
          style={{
            backgroundColor: "rgba(100, 100, 100, 0.2)",
            backgroundPosition: "center",
            borderRadius: "1.5rem",
            marginLeft: "12rem",
            marginRight: "12rem",
            marginTop: "0.5rem",
            padding: "1rem",
          }}
          aria-label=""
        >
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
                  padding: "1.563rem",
                  borderRadius: "1.25rem",
                  marginLeft: "3.438rem",
                }}
              >
                <div style={{ fontSize: "3.75rem", fontWeight: "bold" }}>
                  {kelvinToCelsius(weatherData.main.temp)}°C
                </div>
                <div style={{ fontSize: "1.563rem" }}>
                  Real feel: {kelvinToCelsius(weatherData.main.feels_like)}
                  °C
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                }}
              >
                <div>
                  {weatherData && (
                    <WeatherIcons weather={weatherData.weather[0]} />
                  )}
                </div>
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
                    padding: "1.563rem",
                    borderRadius: "1.25rem",
                    marginRight: "3.438rem",
                  }}
                >
                  <div style={{ fontSize: "24px" }}>
                    Cloudiness: {weatherData.clouds.all}%
                  </div>
                  <div style={{ margin: "1.25rem 0rem" }} />
                  <div style={{ fontSize: "1.5rem" }}>
                    Wind Speed: {weatherData.wind.speed} m/s
                  </div>
                </div>
              </div>
            </div>
          </StyledText>
        </div>
      </>
    )
  );
};

export default WeatherSummary;
