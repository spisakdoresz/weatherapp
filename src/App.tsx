import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BasicCityWeatherContextProvider } from "./context-providers/BasicCityWeatherContext";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
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
