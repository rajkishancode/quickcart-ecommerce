import { Link } from "react-router-dom";
import { useDocumentTitle, useAuth, useUserData } from "../../../hooks";
import {
  changeItemQuantityInCart,
  deleteFromCart,
} from "../../../contexts/Providers/UserDataProvider/helpers";
import "./cart-card.css";

function CartCard({ prod, dynamic = true }) {
  const { userDataDispatch } = useUserData();
  const { _id, title, src, qty, price, original_price, description } = prod;

  const {
    authState: { token },
  } = useAuth();
  useDocumentTitle("Cart | Quickcart");

  const increaseQuantity = () => {
    changeItemQuantityInCart(token, _id, "increment", userDataDispatch);
  };

  const decreaseQuantity = () => {
    qty <= 1
      ? removeItem()
      : changeItemQuantityInCart(token, _id, "decrement", userDataDispatch);
  };

  const removeItem = () => {
    deleteFromCart(token, _id, userDataDispatch);
  };

  return (
    <div class="card card-horizontal  mw-400 mb-4">
      <Link to={`/product/${_id}`}>
        <img src={src} class="img-responsive img-square card-image" />
      </Link>
      ;
      <div class="card-content px-10 py-10 d-flex flex-col gap-m">
        <div class="card-title text-base mb-2">{title}</div>
        <div class="card-title my-4 text-base">
          ₹ {price.toLocaleString()}
          <span class="ecom-original-price px-2">
            {" "}
            ₹ {original_price.toLocaleString()}{" "}
          </span>{" "}
          <span class="ecom-discount">(50% OFF) </span>
        </div>
        <p class="my-4">
          Quantity:
          {dynamic && (
            <i
              class="px-2 fa-solid fa-circle-minus"
              onClick={() => decreaseQuantity()}
            ></i>
          )}
          {qty}
          {dynamic && (
            <i
              class="px-2 fa-solid fa-circle-plus"
              onClick={() => increaseQuantity()}
            ></i>
          )}
        </p>
        <div class="card-content text-base mb-2">{description}</div>
        {dynamic && (
          <button
            class="btn btn-solid-primary w-100 m-0"
            onClick={() => removeItem()}
          >
            Remove from cart
          </button>
        )}
      </div>
    </div>
  );
}

export default CartCard;

