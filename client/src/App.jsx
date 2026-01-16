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
import GroupCompanies from "./WhoWeAre/GroupCompanies";
import Mission from "./WhoWeAre/Mission";
import Vision from "./WhoWeAre/Vision";
import Clients from "./WhoWeAre/Clients";
import Strategy from "./WhoWeAre/Strategy";
import CSR from "./WhoWeAre/CSR";
import Privacy from "./WhoWeAre/Privacy";
import Values from "./WhoWeAre/Values";
import Infrastructure from "./WhoWeAre/Infrastructure";
import Philosophy from "./WhoWeAre/Philosophy";
import Terms from "./WhoWeAre/Terms";
import Portfolio from "./WhoWeAre/Portfolio";
import TheWay from "./WhoWeAre/TheWay";
import Benefits from "./WhoWeAre/Benefits";
import Leadership from "./WhoWeAre/Leadership";
import Investor from "./WhoWeAre/Investor";
import Refund from "./WhoWeAre/Refund";
import DigitalPresence from "./WhoWeAre/DigitalPresence";
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

        <Route path="/about/company" element={<GroupCompanies />} />
        <Route path="/about/mission" element={<Mission />} />
        <Route path="/about/vision" element={<Vision />} />
        <Route path="/about/clients" element={<Clients />} />
        <Route path="/about/strategy" element={<Strategy />} />
        <Route path="/about/csr" element={<CSR />} />
        <Route path="/about/privacy" element={<Privacy />} />
        <Route path="/about/values" element={<Values />} />
        <Route path="/about/philosophy" element={<Philosophy />} />
        <Route path="/about/terms" element={<Terms />} />
        <Route path="/about/infrastructure" element={<Infrastructure />} />
        <Route path="/about/businesses" element={<Portfolio />} />
        <Route path="/about/our-way" element={<TheWay />} />
        <Route path="/about/benefits" element={<Benefits />} />
        <Route path="/about/team" element={<Leadership />} />
        <Route path="/about/investors" element={<Investor />} />
        <Route path="/about/refund" element={<Refund />} />
        <Route path="/about/website" element={<DigitalPresence />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;