import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import "./App.css";
import NavBar from "./components/NavBar";
import Home from './components/pages/Home';
import UniformsAndAccessories from "./components/pages/UniformAndAccessories";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Footer from "./components/footer";

function App(prop: any) {
  return (
    <div className="bg-[#F4F3F3]">
      <Router> 
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/uniforms-and-accessories" element={<UniformsAndAccessories />} />
          <Route path="/services" element={<Services />} /> 
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer /> 
    </div>
  );
}

export default App;