import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Card({ movie }) {
  const { poster_path, title, overview } = movie;
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className="card">
      <img className="card-image" src={imageUrl} alt={title} />
      <div className="title-icon">
        <h2 style={{ fontSize: "14px" }}>{title}</h2>
        <KeyboardArrowRightIcon />
      </div>
      <p
        style={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "14px",
          color: "#b5b5be",
        }}
      >
        {overview}
      </p>
    </div>
  );
}

export default Card;
