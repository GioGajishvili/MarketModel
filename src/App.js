import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ height: "1000px", width: "100%" }}></div>

      <Footer />
    </div>
  );
}

export default App;
