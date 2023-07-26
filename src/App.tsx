import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Today from "./pages/Today";
import ForeCast from "./pages/ForeCast";
import Radar from "./pages/Radar";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import AirQuality from "./AirQuality";
import Daily from "./Daily";
import Hourly from "./pages/Hourly";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ApiContextProvider } from "./components/ApiContext";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/today" element={<Today />} />
      <Route path="/hourly" element={<Hourly />} />
      <Route path="/daily" element={<Daily />} />
      <Route path="/radar" element={<Radar />} />
      <Route path="/forecast" element={<ForeCast />} />
      <Route path="/airquality" element={<AirQuality />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <ApiContextProvider>
        <div>
          <Header />
          <NavBar />
          <AppRoutes />
          <Footer />
        </div>
      </ApiContextProvider>
    </Router>
  );
}

export default App;
