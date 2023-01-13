import React from "react";
import "./Header.css";
import SearchBar from "./SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Facebook from "../../Icons/Facebook.png";
import Instagram from "../../Icons/Instagram.png";
import VapeLogo from "../../Icons/VapeLogo.webp";
import { CiShoppingCart, CiSearch, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="black-line">
        <div className="info-container d-flex align-items-center">
          <p className="worktime">
            {" "}
            Mon-Fri: <mark className="work-hours">9:00 AM - 5:30 PM</mark>
          </p>
          <p className="address">
            {" "}
            Visit our showroom in 1234 Street Adress City Address, 1234 Contact
            Us{" "}
          </p>
          <p className="contact">Call Us: (995) 551 37 07 37 </p>
          <a href="https://www.facebook.com" target="_blank">
            <img className="facebook-logo" src={Facebook} />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img className="instagram-logo" src={Instagram} />
          </a>
        </div>
      </div>
      <div className="routing-container">
        <div className="main-header d-flex align-items-center">
          <img className="vape-logo" src={VapeLogo} />
          <Link to="/" className="header-filters" id="first-filter">
            Home
          </Link>
          <Link to="/Laptops" className="header-filters">
            Laptops
          </Link>
          <Link to="/DesktopPcs" className="header-filters">
            Desktop PCs
          </Link>
          <Link to="/NetworkingDevices" className="header-filters">
            Networking Devices
          </Link>
          <Link to="/PrintersScanners" className="header-filters">
            Printers & Scanners
          </Link>
          <Link to="/PCParts" className="header-filters">
            PC Parts
          </Link>
          <SearchBar />
          <CiShoppingCart className="cart-icon" />
          <CiUser className="user-icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
