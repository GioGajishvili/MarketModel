import React from "react";
import "./Header.css";
import SearchBar from "./SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Facebook from "../../Icons/Facebook.png";
import Instagram from "../../Icons/Instagram.png";
import VapeLogo from "../../Icons/VapeLogo.webp";
import { CiShoppingCart, CiSearch, CiUser } from "react-icons/ci";

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
          <a className="header-filters" id="first-filter">
            {" "}
            Laptops{" "}
          </a>
          <a className="header-filters"> Desktop PCs </a>
          <a className="header-filters"> Networking Devices </a>
          <a className="header-filters"> Printers & Scanners</a>
          <a className="header-filters"> PC Parts </a>
          <a className="header-filters"> Repairs </a>
          <SearchBar />
          <CiShoppingCart className="cart-icon" />
          <CiUser className="user-icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
