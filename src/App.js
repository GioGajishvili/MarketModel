import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Laptops from "./Pages/Laptops/Laptops";
import DesktopPcs from "./Pages/DesktopPCs/DesktopPcs";
import NetworkingDevices from "./Pages/NetworkingDevices/NetworkingDevices";
import AboutUs from "./Pages/AboutUs/AboutUs";
import PCParts from "./Pages/PCParts/PCParts";
import Auth from "./Pages/Auth/Auth";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Auth" element={<Auth />} />
          <Route path="/Laptops" element={<Laptops />} />
          <Route path="/DesktopPCs" element={<DesktopPcs />} />
          <Route path="/NetworkingDevices" element={<NetworkingDevices />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/PCParts" element={<PCParts />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
