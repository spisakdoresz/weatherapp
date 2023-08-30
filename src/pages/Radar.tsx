import { useEffect, useState } from "react";

const defaultMapWeatherData = {
  layer: "clouds_new",
  x: 0,
  z: 0,
  y: 0,
  lon: 0,
  lat: 0,
  coord: null,
  appid: "",
  imageUrl: "imageUrl",
};

const Radar = () => {
  const [mapWeatherData, setMapWeatherData] = useState(defaultMapWeatherData);
  const [loading, setLoading] = useState(true);

  const fetchMapWeatherData = (latitude: number, longitude: number) => {
    setLoading(true);

    const layer = "clouds_new";
    const z = 10;
    const x = 5;
    const y = 10;

    fetch(
      `https://tile.openweathermap.org/map/${layer}/${z}/${x}/${y}.png?appid=05a66915c31c9dbdc378a7a876e14c3c`
    )
      .then((response) => response.blob())
      .then((imageBlob) => {
        const imageUrl = URL.createObjectURL(imageBlob);
        setMapWeatherData({
          layer: layer,
          z: z,
          x: x,
          y: y,
          appid: "05a66915c31c9dbdc378a7a876e14c3c",
          lon: longitude,
          lat: latitude,
          coord: null,
          imageUrl: imageUrl,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    const latitude = 40.7128;
    const longitude = -74.006;
    fetchMapWeatherData(latitude, longitude);
  }, []);

  return (
    <div id="radar">
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
          marginBottom: "3vh",
        }}
      >
        RADAR
      </div>
      {/* {mapWeatherData.imageUrl && (
        // <img src={mapWeatherData.imageUrl} alt="Weather Map" />
      )} */}
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <iframe
          src="http://www.zoomforecast.com/zoomradar_weather_map/weather_image_user.php?key=QqKbiO1WI2CAo9g"
          width="600"
          height="500"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default Radar;
