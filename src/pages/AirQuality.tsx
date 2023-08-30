import React, { useContext, useEffect, useState } from "react";
import { ApiContext, ApiContextType } from "../context-providers/ApiContext";
import { styled } from "@mui/material";
import {
  getAiqEvaluation,
  getNo2Evaluation,
  getO3Evaluation,
  getPm10Evaluation,
  getPm2_5Evaluation,
} from "../utils/util";

const StyledFontType = styled("div")({
  color: "black",
  fontFamily: "monospace",
  fontSize: "1rem",
});

const StyledAirQualityContainer = styled("div")({
  padding: "25px",
  display: "flex",
  marginLeft: "2vh",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "space-between",
  "& > *:not(:last-of-type)": {
    borderBottom: "1px solid #ccc",
    marginBottom: "0.2rem",
    paddingBottom: "0.2rem",
    borderColor: "white",
    width: "65%",
  },
});

const StyledDataItem = styled("div")({
  fontSize: "1.2rem",
  margin: "0.1rem 0",
  justifyContent: "space-between",
  display: "flex",
});

const AirQuality = () => {
  const API_KEY = "05a66915c31c9dbdc378a7a876e14c3c";
  const { lastSuccessfulSearch } = useContext(ApiContext) as ApiContextType;

  const [airQualityData, setAirQualityData] = useState<any | null>(null);

  useEffect(() => {
    if (lastSuccessfulSearch) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${lastSuccessfulSearch}&appid=${API_KEY}`
      )
        .then((response) => response.json())
        .then((resultJson) => {
          const { coord } = resultJson;
          const apiUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${coord.lat}&lon=${coord.lon}&appid=${API_KEY}`;

          fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
              setAirQualityData(data);
            })
            .catch((error) => {
              console.error("Error fetching air quality data:", error);
            });
        })
        .catch((error) => {
          console.error("Error fetching city data:", error);
        });
    }
  }, [lastSuccessfulSearch]);

  return (
    <div id="airquality">
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          color: "black",
          fontSize: "1.5rem",
          fontWeight: "bold",
          fontFamily: "monospace",
          marginTop: "3vh",
        }}
      >
        AIR QUALITY
      </div>
      <div
        style={{
          marginTop: "3vh",
          backgroundColor: "rgba(100, 100, 100, 0.2)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginLeft: "12rem",
          marginRight: "12rem",
          borderRadius: "1.5rem",
          padding: "25px",
        }}
        aria-label=""
      >
        {airQualityData && (
          <div>
            <StyledFontType>
              <StyledAirQualityContainer>
                <StyledDataItem>
                  <div>Current Pollutants</div>
                  <div>Air Quality Scale</div>
                  <div>Pollutant concentration in μg/m3</div>
                </StyledDataItem>
                <StyledDataItem>
                  <div>AQI:</div>
                  <div>{getAiqEvaluation(airQualityData.list[0].main.aqi)}</div>
                  <div>{airQualityData.list[0].main.aqi}</div>
                </StyledDataItem>
                <StyledDataItem>
                  <div>
                    NO<sub>2</sub>:
                  </div>
                  <div>
                    {getNo2Evaluation(airQualityData.list[0].components.no2)}
                  </div>

                  <div> {airQualityData.list[0].components.no2}</div>
                </StyledDataItem>
                <StyledDataItem>
                  <div>
                    {" "}
                    O<sub>3</sub>:{" "}
                  </div>
                  <div>
                    {" "}
                    {getO3Evaluation(airQualityData.list[0].components.o3)}{" "}
                  </div>
                  <div> {airQualityData.list[0].components.o3} </div>
                </StyledDataItem>
                <StyledDataItem>
                  <div>
                    {" "}
                    PM<sub>10</sub>:{" "}
                  </div>
                  <div>
                    {" "}
                    {getPm10Evaluation(
                      airQualityData.list[0].components.pm10
                    )}{" "}
                  </div>
                  <div> {airQualityData.list[0].components.pm10} </div>
                </StyledDataItem>
                <StyledDataItem>
                  <div>
                    {" "}
                    PM<sub>2.5</sub>:{" "}
                  </div>
                  <div>
                    {" "}
                    {getPm2_5Evaluation(
                      airQualityData.list[0].components.pm2_5
                    )}{" "}
                  </div>
                  <div> {airQualityData.list[0].components.pm2_5} </div>
                </StyledDataItem>
              </StyledAirQualityContainer>
            </StyledFontType>
          </div>
        )}
      </div>
    </div>
  );
};

export default AirQuality;
