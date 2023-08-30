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

// const StyledFontType = styled("div")({
//   // color: "black",
//   // fontFamily: "monospace",
//   // fontSize: "1rem",
// });

const StyledTableTypography = styled("div")({
  justifyContent: "center",
  display: "flex",
  fontFamily: "monospace",
  fontSize: "1rem",
  color: "black",
  fontWeight: "bold",
  margin: "0.1rem 0",
});

const StyledTableHeadTypography = styled("div")({
  justifyContent: "center",
  display: "flex",
  fontFamily: "monospace",
  fontSize: "0.5rem",
  color: "black",
  fontWeight: "bold",
});

const StyledAirQualityContainer = styled("div")({
  // padding: "25px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  marginLeft: "20%", // Bal oldalra 20% margó
  marginRight: "20%", // Jobb oldalra 20% margó
  // "& > *:not(:first-of-type)": {
  //   borderBottom: "1px solid #ccc",
  //   marginBottom: "0.2rem",
  //   paddingBottom: "0.2rem",
  //   borderColor: "white",
  //   width: "40%",
  // },
});

const StyledDataItem = styled("div")({
  fontSize: "1.2rem",
  margin: "0.1rem 0",
  justifyContent: "space-between",
  display: "flex",
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
            <StyledAirQualityContainer>
              <Table>
                {/* <TableHead>
                    <TableRow>
                      <TableCell>
                        <StyledTableHeadTypography>
                          Current Pollutants
                        </StyledTableHeadTypography>
                      </TableCell>
                      <TableCell>
                        <StyledTableHeadTypography>
                          Air Quality Scale
                        </StyledTableHeadTypography>
                      </TableCell>
                      <TableCell>
                        <StyledTableHeadTypography>
                          Pollutant concentration in μg/m3
                        </StyledTableHeadTypography>
                      </TableCell>
                    </TableRow>
                  </TableHead> */}
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
