import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Laptops from "./Pages/Laptops/Laptops";
import DesktopPcs from "./Pages/DesktopPCs/DesktopPcs";
import NetworkingDevices from "./Pages/NetworkingDevices.js/NetworkingDevices";
import PrintersScanners from "./Pages/PrinterSScanners/PrintersScanners";
import PCParts from "./Pages/PCParts/PCParts";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Laptops" element={<Laptops />} />
          <Route path="/DesktopPCs" element={<DesktopPcs />} />
          <Route path="/NetworkingDevices" element={<NetworkingDevices />} />
          <Route path="/PrintersScanners" element={<PrintersScanners />} />
          <Route path="/PCParts" element={<PCParts />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
