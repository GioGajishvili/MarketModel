import "./Footer.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TbHeadset, TbUser, TbDiscount } from "react-icons/tb";
import TopFooterComponent from "./TopFooterComponent";
import EmailFooterComponent from "./EmailFooterComponent";
import LinkComponent from "./LinkComponent";

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
    </div>
  );
}

export default Footer;
