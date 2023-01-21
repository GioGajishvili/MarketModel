import React from "react";
import "./Header.css";
import SearchBar from "./SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Facebook from "../../assets/Icons/Facebook.png";
import Instagram from "../../assets/Icons/Instagram.png";
import LogoForHeader from "../../assets/Icons/LogoForHeader.png";
import { CiShoppingCart, CiSearch, CiUser } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

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
          <img className="logo-for-header" src={LogoForHeader} />
          <Link to="/" className="header-filters" id="first-filter">
            Home
          </Link>
          <Link to="/AboutUs" className="header-filters">
            About Us
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
          <Link to="/PCParts" className="header-filters">
            PC Parts
          </Link>
          <SearchBar />
          <CiShoppingCart className="cart-icon cart-icon-global" />
          <button
            style={{
              border: "none",
              width: "fit-content",
              borderRadius: "50px",
              backgroundColor: "transparent",
            }}
            onClick={() => navigate("/Auth")}
          >
            <CiUser className="user-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
