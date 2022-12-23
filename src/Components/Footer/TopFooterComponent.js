import React from "react";
import "./TopFooterComponent.css";

export default function TopFooterComponent(props) {
  const { icon, title, text } = props;
  return (
    <div className="bubbles-container">
      <div className="bubbles" id="first-bubble">
        {icon}
      </div>
      <div className="title-container">
        <h4 className="footer-title">{title}</h4>
      </div>
      <div className="text-container">
        <p className="footer-text">{text}</p>
      </div>
    </div>
  );
}
