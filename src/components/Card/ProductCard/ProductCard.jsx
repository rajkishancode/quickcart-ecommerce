import React from "react";
import {Link} from "react-router-dom";
import "./product-card.css"
function ProductCard({ info }) {
  const { title, price, original_price, src, _id } = info.prod;
  return (
    <div className="card">
    <Link>

      <span className="card-badge-right">
        <i className="far fa-heart"></i>
      </span>

      <div>
        <img
          src={src}
          alt={title}
          className="img-responsive img-square card-image"
        />
      </div>

      <div className="card-body p-4">
        <div className="card-title mb-2 text-center">{title}</div>

        <div className="card-title mb-2 text-center">
          ₹ {price.toLocaleString()}
          <span className="ecom-original-price px-2">
            {" "}
            ₹ {original_price.toLocaleString()}
          </span>{" "}
          <span className="ecom-discount">(50% OFF) </span>
        </div>
      </div>
    </Link>

      <button className="btn btn-solid-primary w-100 ">Add to cart</button>
    </div>
  );
}

export default ProductCard;
