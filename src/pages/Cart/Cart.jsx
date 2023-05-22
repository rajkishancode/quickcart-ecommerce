import React from 'react'
import "./Cart.css";
export const Cart = () => {
  return (
    <div><main class="cart">
        <div class="auth-container">
            <h3 class="h3 text-center mt-10 mb-6">Cart (1)</h3>

            <div class="cart-content d-flex justify-content-center ">
                <div class="card card-horizontal w-50  ">

                    <img src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        alt="check suit" class="img-responsive img-square card-image"/>

                    <div class="card-content p-4">
                        <div class="card-title text-base mb-2">
                            Suit
                        </div>
                        <div class="card-title my-4 text-base">
                            Rs. 2,999 <span class="ecom-original-price px-2"> Rs.6,000 </span> <span
                                class="ecom-discount">
                                (50% OFF) </span>
                        </div>
                        <p class="my-4">
                            Quantity: <i class="px-2 fa-solid fa-circle-minus"></i>
                            1
                            <i class="px-2 fa-solid fa-circle-plus"></i>
                        </p>
                        <div class="card-content text-base mb-2">
                            a set of outer clothes made of the same fabric and designed to be worn together, typically
                            consisting of a jacket and trousers.
                        </div>
                        <button class="cart-btn btn-solid-primary my-2 ">
                            Remove from cart
                        </button>
                        <button class="cart-btn btn-outline-primary my-2">
                            Add to wishlist
                        </button>
                    </div>
                </div>

                <div class="cart-details p-10">
                    <p class="cart-title-details fw-600 text-uppercase">Price details</p>
                    <ul class="cart-list">
                        <li class="cart-item ">
                            Price (2 items) <span>&#8377; 4999</span>
                        </li>
                        <li class="cart-item">Discount <span>- &#8377; 1999</span></li>
                        <li class="cart-item">
                            Delivery Charges <span>&#8377; 499</span>
                        </li>
                        <li class="cart-item fw-600 text-uppercase">
                            total amount <span>&#8377; 3499</span>
                        </li>
                    </ul>
                    <p class="pb-6">You will save &#8377; 1999 on this order</p>
                    <button class="btn btn-solid-primary w-100 m-0">PLACE ORDER</button>
                </div>
            </div>
        </div>
    </main></div>
  )
}
