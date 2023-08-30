import HomePage from "./pages/HomePage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Today from "./pages/Today";
import ForeCast from "./pages/ForeCast";
import Radar from "./pages/Radar";
import NavBar from "./components/NavBar";
import AirQuality from "./pages/AirQuality";
import Hourly from "./pages/Hourly";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BasicCityWeatherContextProvider } from "./context-providers/BasicCityWeatherContext";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/today" element={<Today />} />
      <Route path="/hourly" element={<Hourly />} />
      <Route path="/radar" element={<Radar />} />
      <Route path="/forecast" element={<ForeCast />} />
      <Route path="/airquality" element={<AirQuality />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <BasicCityWeatherContextProvider>
        <div>
          <Header />
          <NavBar />
          <AppRoutes />
          <Footer />
        </div>
      </BasicCityWeatherContextProvider>
    </Router>
  );
}

export default App;
