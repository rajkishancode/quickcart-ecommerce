import { useEffect, useState } from "react";
import { useUserData, useAuth, useDocumentTitle } from "../../hooks";
import { useNavigate, Link } from "react-router-dom";
import { CartCard } from "../../components";
import { fetchCart } from "../../contexts/Providers/UserDataProvider/helpers";

import "./Cart.css";
export const Cart = () => {
  const {
    userDataState: { cart },
    userDataDispatch,
  } = useUserData();

  const navigate = useNavigate();
  const {
    authState: { token },
  } = useAuth();

  useDocumentTitle("Cart | Quickcart");

  useEffect(() => {
    fetchCart(token, userDataDispatch);
  }, []);

  const cartElement =
    cart.length === 0 ? (
      <main className="flex-col mx-auto">
        <h3>Oh no! Your Cart is empty.</h3>
        <h4>Add Items To View Them Here</h4>
        <div className="view-product">
          <Link className="btn btn-solid-primary" to={"/products"}>
            View Products
          </Link>
        </div>
      </main>
    ) : (
      cart.map((product) => <CartCard key={product._id} prod={product} />)
    );

  const totalPrice = cart?.reduce(
    (sum, { qty, original_price }) => sum + original_price * qty,
    0
  );

  const totalDiscount = cart?.reduce(
    (sum, { price, original_price, qty }) =>
      sum + (original_price - price) * qty,
    0
  );

  const deliveryCharges =
    cart.length !== 0 ? (totalPrice > 1000 ? 100 : 300) : "00";
  const finalAmount = totalPrice + deliveryCharges - totalDiscount;

  return (
    <main className="cart">
      <h3 className="h3 text-center mt-10 mb-6">Cart ({cart.length})</h3>
      <div className="auth-container ">
        <div className="cart-content d-flex justify-content-center">
          <div className="w-50">{cartElement}</div>

          <div className="cart-details p-10 ">
            <p className="cart-title-details fw-600 text-uppercase">
              Price details
            </p>
            <ul className="cart-list">
              <li className="cart-item ">
                Price ({cart.length}) <span>&#8377; {totalPrice}</span>
              </li>
              <li className="cart-item">
                Discount <span>- &#8377; {totalDiscount}</span>
              </li>
              <li className="cart-item">
                Delivery Charges <span>&#8377; {deliveryCharges}</span>
              </li>
              <li className="cart-item fw-600 text-uppercase">
                total amount <span>&#8377; {finalAmount}</span>
              </li>
            </ul>
            <p className="pb-6">
              You will save &#8377; {totalDiscount} on this order
            </p>
            <button className="btn btn-solid-primary w-100 m-0">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
