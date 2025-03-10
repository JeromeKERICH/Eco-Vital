import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/ContactPage";
import Team from "./components/pages/TeamPage";
import StrategicAdvisory from "./components/pages/Strategic";
import InvestmentAdvisory from "./components/pages/Investment";
import SustainabilityESG from "./components/pages/Sustain";
import TrainingCapacity from "./components/pages/Training";
import MarketExpansion from "./components/pages/Market";
import ServicePage from "./components/pages/ServicePage";
import ServiceCTAPage from "./components/pages/ServiceCTAPage";
import AdvocacyServices from "./components/pages/Advocacy";



function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/> 
        <Route path="contactpage" element={<Contact/>}/>
        <Route path="teammembers" element={<Team/>}/>
        <Route path="/strategic-advisory" element={<StrategicAdvisory/>}/>
        <Route path="investment-advisory" element={<InvestmentAdvisory/>}/>
        <Route path="sustainability-esg" element={<SustainabilityESG/>}/>
        <Route path="training-capacity" element={<TrainingCapacity/>}/>
        <Route path="market-expansion" element={<MarketExpansion/>}/>
        <Route path="servicespage" element={<ServicePage/>}/>
        <Route path="service-cta" element={<ServiceCTAPage/>}/>
        <Route path="advocacy-services" element={<AdvocacyServices/>}/>
    </Routes>
  );
}

export default AppRoutes;
