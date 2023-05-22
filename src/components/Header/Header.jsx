import React from 'react'
import {Link} from "react-router-dom";
import "./Header.css"
export const Header = () => {
  return (
    <div>
      <nav className="navigation-bar d-flex flex-center">
        <div className="nav-section">
          <div className="nav-logo nav-section-items">
            <Link to="/" className="navigation-logo">
              <img
                src="https://i.postimg.cc/15YGpnZM/logo.webp"
                alt="quickcart logo"
                
              />
            </Link>
          </div>
        </div>

        <label className="search-bar w-50 gap-xl ">
          <span className="search-btn" type="submit">
            <i className="fa fa-search fa-lg"> </i>
          </span>
          <input
            className="search-input"
            type="text"
            placeholder="Search for more"
            name="search"
          />
        </label>

        <div className="nav-section">
          <ul className="nav-icons list-style-none d-flex flex-center ">
            <li className="list-inline-item">
              <Link to="/login" className="btn btn-solid-primary m-2">
                Login
              </Link>
            </li>

            <li className="list-inline-item">
              <Link
                to="/wishlist"
                className="nav-icon-link link-no-style"
              >
                <div className="badge-wrap">
                  <i className="far fa-heart  badge-icon  "></i>
                  <span className="badge-status badge-number">3</span>
                </div>
              </Link>
            </li>

            <li className="list-inline-item">
              <Link
                to="/cart"
                className="nav-icon-link link-no-style"
              >
                <div className="badge-wrap">
                  <i className="fa fa-cart-shopping badge-icon "></i>
                  <span className="badge-status badge-number">3</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
