import React from "react";
import { Link } from "react-router-dom";
import "./carousel-card.css";

function CarouselCard({src, text}) {
  return (
    <div className="category">
      <Link to={`/products/${text}`}>
        <img className="category-image" src={src} alt="Shirt" />
      </Link>

      <p className="category-text">{text}</p>
    </div>
  );
};

export default CarouselCard;

