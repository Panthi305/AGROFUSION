import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./HomePage/Navbar"
import { useEffect } from "react";
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import Footer from "./HomePage/Footer";
import ServicePage from "./ServicePage/ServicePage"
import Drone from "./Drone/Drone";
import BioCNG from "./BioCNG/BioCNG";
import FarmMechanization from "./FarmMechanization/FarmMechanization";
import SoilTesting from "./SoilTesting/SoilTesting";
import InputSupply from "./InputSupply/InputSupply";
import Processing from "./Process/Processing";
import Solar from "./Solar/Solar";
import AgriFinance from "./AgriFinance/AgriFinance";
import FPOCooperative from "./FPOCooperative/FPOCooperative";
import Products from "./Products/Products";
import FarmerCollaboration from "./FarmerCollaboration/FarmerCollaboration";
import Contact from "./Contact/Conatct";
// import Navbar1 from "./HomePage/Navbar1";
// import Navigation from "./HomePage/MainNavbar";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <BrowserRouter>
      {/* <Navbar1/> */}
      <Navbar />
      {/* <Navigation /> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/services/drone-farming" element={<Drone />} />
        <Route path="/services/biocng" element={<BioCNG />} />
        <Route path="/services/mechanization" element={<FarmMechanization />} />
        <Route path="/services/soil-testing" element={<SoilTesting />} />
        <Route path="/services/agricultural-input" element={<InputSupply />} />
        <Route path="/services/processing-market-linkage" element={<Processing />} />
        <Route path="/services/solar-irrigation" element={<Solar />} />
        <Route path="/services/agri-finance" element={<AgriFinance />} />
        <Route path="/services/fpo-cooperative-support" element={<FPOCooperative />} />
        {/* Add other routes like services, contact, etc. */}

        <Route path="/products" element={<Products />} />
        <Route path="/farmers" element={<FarmerCollaboration />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;