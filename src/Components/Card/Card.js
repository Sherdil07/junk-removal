import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, detail, color }) => {
  return (
    <div className="card" style={{ borderColor: color }}>
      <img src={emoji} alt="" className="card-image" />
      <div className="card-content">
        <span className="card-heading">{heading}</span>
        <span className="card-detail">{detail}</span>
        <button className="c-button">LEARN MORE</button>
      </div>
    </div>
  );
};

export default Card;
