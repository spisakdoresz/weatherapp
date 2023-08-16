import React from "react";
import { ApiContext, ApiContextType } from "../context-providers/ApiContext";
import { styled } from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { useNavigate } from "react-router-dom";
import WeatherSummary from "../components/WeatherSummary";
import PageContainer from "../components/PageContainer";

const StyledText = styled("div")({
  fontFamily: "monospace",
});

const HomePage = () => {
  const { weatherData } = React.useContext(ApiContext) as ApiContextType;
  const navigate = useNavigate();

  console.log(weatherData);
  return (
    <PageContainer>
      <div
        style={{
          position: "absolute",
          backgroundImage: `url("https://tionimpo.sirv.com/Images/weatherwizbanner.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          top: "3rem",
          left: "12rem",
          right: "12rem",
          bottom: "20rem",
          borderRadius: "1.5rem",
        }}
        aria-label=""
      >
        <StyledText>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "black",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            CURRENT WEATHER
          </div>
          <WeatherSummary weatherData={weatherData} />
          <div
            style={{
              position: "absolute",
              display: "inline-flex",
              alignItems: "center",
              bottom: "10px",
              right: "10px",
              color: "black",
              fontSize: "1.5rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => navigate("/today")}
          >
            MORE DETAILS <TrendingFlatIcon />
          </div>
        </StyledText>
      </div>
    </PageContainer>
  );
};

export default HomePage;
