import React from "react";
import "./EmailFooterComponent.css";
import LinkComponent from "./LinkComponent";

export default function EmailFooterComponent(props) {
  const { title, slogan, button, input } = props;
  return (
    <div className="footer-bot">
      <div className="bot-footer-main">
        <div className="footer-title-container">
          <h1 className="signup-title">{title}</h1>
          <p className="signup-text">{slogan}</p>
        </div>
        <div className="footer-email-container">
          <input placeholder="Your E-mail" className="footer-input">
            {input}
          </input>
          <button className="footer-button">{button}</button>
        </div>
      </div>
      <div className="short-links-container">
        <LinkComponent />
      </div>
    </div>
  );
}
