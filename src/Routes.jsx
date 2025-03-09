import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/ContactPage";
import Team from "./components/pages/TeamPage";



function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/> 
        <Route path="contactpage" element={<Contact/>}/>
        <Route path="teammembers" element={<Team/>}/>
    </Routes>
  );
}

export default AppRoutes;
