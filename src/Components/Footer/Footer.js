import "./Footer.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TbHeadset, TbUser, TbDiscount } from "react-icons/tb";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import TopFooterComponent from "./TopFooterComponent";
import EmailFooterComponent from "./EmailFooterComponent";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top d-flex align-items-start justify-content-around">
        <TopFooterComponent
          icon={<TbHeadset className="headset-icon" size="2rem" />}
          title={"Product Support"}
          text={
            "Up to 3 years on-site warranty available for your peace of mind."
          }
        />
        <TopFooterComponent
          icon={<TbUser className="userfooter-icon" size="2rem" />}
          title={"Personal Account"}
          text={
            "With big discounts, free delivery and a dedicated support specialist."
          }
        />
        <TopFooterComponent
          icon={<TbDiscount className="discount-icon" size="2rem" />}
          title={"Amazing Savings"}
          text={
            "Up to 70% off new Products, you can be sure of the best price."
          }
        />
      </div>
      <EmailFooterComponent
        title={"Sign Up To Our Newsletter"}
        slogan={"Be the first to hear about the latest offers"}
        button={"Subscribe"}
        linktitle={""}
      />
      <div className="footer-botter-component">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <a href="https://www.facebook.com" target="_blank">
            <FaFacebookSquare className="facebook-logo-footer" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <FiInstagram className="instagram-logo-footer" />
          </a>
        </div>
        <div
          style={{
            marginLeft: "76%",
            marginTop: "10px",
          }}
        >
          <p className="copyright-text">Copyright © 2023 Shop Pty. Ltd.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
