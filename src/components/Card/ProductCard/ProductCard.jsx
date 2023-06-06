import React from "react";
import {Link} from "react-router-dom";
import {CartButton,WishlistButton} from "../../.";
import "./product-card.css"
function ProductCard({ info,wish }) {
  const { title, price, original_price, src, _id } = info.prod;
  
  const wishlistStyle = !wish ? "card" : "card mw-300";
  return (
    <div className={wishlistStyle}>
      <WishlistButton prod={info.prod} classes={"card-badge-right"} />
      <Link to={`/product/${_id}`}>
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

      <CartButton prod={info.prod} classes={"btn btn-solid-primary w-100 "} />
    </div>
  );
}

export default ProductCard;
