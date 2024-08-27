import React from "react";

function Card({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="title-icon">
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default Card;
