import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./pages/footer";
import ScrollToTop from "./components/ScrollToTop";
import WeatherApp from "./Projects/WeatherApp";
import Register from "./Projects/Auth/Register";
import Login from "./Projects/Auth/Login";
import HoroscopeDashboard from "./Projects/HoroscopeDashboard";
import PrivateRoute from "./components/PrivateRoute";
import CaseStudies from "./pages/CaseStudies";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/weather" element={<WeatherApp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/auth/register" element={<Register />} />
        <Route path="/projects/auth/login" element={<Login />} />
        <Route path="/dashboard/horoscope" element={<HoroscopeDashboard />} />
        <Route path="/ux-case-studies" element={<CaseStudies />} />
        <Route
          path="/projects/horoscope"
          element={
            <PrivateRoute>
              <HoroscopeDashboard />
            </PrivateRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
