import { useContext, useEffect, useState } from "react";
import {
  BasicCityWeatherContext,
  BasicCityWeatherContextType,
} from "../context-providers/BasicCityWeatherContext";
import { TableCell, TableRow, styled } from "@mui/material";
import {
  getAiqEvaluation,
  getNo2Evaluation,
  getO3Evaluation,
  getPm10Evaluation,
  getPm2_5Evaluation,
} from "../utils/util";
import { Table, TableHead } from "@material-ui/core";

const StyledTableTypography = styled("div")({
  justifyContent: "center",
  display: "flex",
  fontFamily: "monospace",
  fontSize: "1rem",
  color: "black",
  fontWeight: "bold",
  margin: "0.1rem 0",
});

const StyledAirQualityContainer = styled("div")({
  padding: "1.563rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  marginLeft: "20%",
  marginRight: "20%",
  "& > *:not(:first-of-type)": {
    borderBottom: "1px solid #ccc",
    marginBottom: "0.2rem",
    paddingBottom: "0.2rem",
    borderColor: "white",
    width: "40%",
  },
});

const AirQuality = () => {
  const API_KEY = "05a66915c31c9dbdc378a7a876e14c3c";
  const { lastSuccessfulSearch } = useContext(
    BasicCityWeatherContext
  ) as BasicCityWeatherContextType;

  const [airQualityData, setAirQualityData] = useState<any | null>(null);

  useEffect(() => {
    if (lastSuccessfulSearch) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${lastSuccessfulSearch}&appid=${API_KEY}`
      )
        .then((response) => response.json())
        .then((resultJson) => {
          const { coord } = resultJson;
          const apiUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${coord.lat}&lon=${coord.lon}&appid=${API_KEY}`;

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
    <div id="airquality" style={{ paddingTop: "6rem" }}>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          color: "black",
          fontSize: "1.5rem",
          fontWeight: "bold",
          fontFamily: "monospace",
        }}
      >
        AIR QUALITY
      </div>
      <div
        style={{
          marginTop: "0.5rem",
          backgroundColor: "rgba(100, 100, 100, 0.2)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginLeft: "12rem",
          marginRight: "12rem",
          borderRadius: "1.5rem",
        }}
        aria-label=""
      >
        {airQualityData && (
          <div>
            <StyledAirQualityContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <StyledTableTypography>AQI:</StyledTableTypography>
                    </TableCell>
                    <TableCell>
                      <StyledTableTypography>
                        {getAiqEvaluation(airQualityData.list[0].main.aqi)}
                      </StyledTableTypography>
                    </TableCell>
                    <TableCell>
                      <StyledTableTypography>
                        {airQualityData.list[0].main.aqi}
                      </StyledTableTypography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <StyledTableTypography>
                        NO<sub>2</sub>:
                      </StyledTableTypography>
                    </TableCell>
                    <TableCell>
                      <StyledTableTypography>
                        {getNo2Evaluation(
                          airQualityData.list[0].components.no2
                        )}
                      </StyledTableTypography>
                    </TableCell>
                    <TableCell>
                      <StyledTableTypography>
                        {airQualityData.list[0].components.no2}
                      </StyledTableTypography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <StyledTableTypography>
                        O<sub>3</sub>:
                      </StyledTableTypography>
                    </TableCell>
                    <TableCell>
                      <StyledTableTypography>
                        {getO3Evaluation(airQualityData.list[0].components.o3)}
                      </StyledTableTypography>
                    </TableCell>
                    <TableCell>
                      <StyledTableTypography>
                        {airQualityData.list[0].components.o3}
                      </StyledTableTypography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <StyledTableTypography>
                        PM<sub>10</sub>:
                      </StyledTableTypography>
                    </TableCell>
                    <TableCell>
                      <StyledTableTypography>
                        {getPm10Evaluation(
                          airQualityData.list[0].components.pm10
                        )}
                      </StyledTableTypography>
                    </TableCell>
                    <TableCell>
                      <StyledTableTypography>
                        {airQualityData.list[0].components.pm10}
                      </StyledTableTypography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <StyledTableTypography>
                        PM<sub>2.5</sub>:
                      </StyledTableTypography>
                    </TableCell>
                    <TableCell>
                      <StyledTableTypography>
                        {getPm2_5Evaluation(
                          airQualityData.list[0].components.pm2_5
                        )}
                      </StyledTableTypography>
                    </TableCell>
                    <TableCell>
                      <StyledTableTypography>
                        {airQualityData.list[0].components.pm2_5}
                      </StyledTableTypography>
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </StyledAirQualityContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default AirQuality;
