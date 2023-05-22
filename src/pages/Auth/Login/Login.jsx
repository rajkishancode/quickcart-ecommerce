import React from 'react'
import { Link } from "react-router-dom";
import "../Auth.css";

export const Login = () => {
  return (
    <div>
      <main className="auth mt-10">
        <div className="auth-container mt-0">
          <div className="auth-content mx-auto p-10">
            <h3 className="text-center mt-0">Login</h3>
            <label className="label-text" for="email">
              Email address
            </label>
            <input
              className="input-auth w-100 mb-6"
              type="email"
              id="email"
              placeholder="raj@gmail.com"
            />
            <label className="label-text" for="Password">
              Password
            </label>
            <input
              className="input-auth w-100 mb-6"
              type="Password"
              id="Password"
              placeholder="****************"
            />

            <div className="checkbox-input">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me" className="ml-2">
                Remember me
              </label>
              <Link to="#" className="ml-auto">
                Forgot your Password?
              </Link>
            </div>
            <div className="my-6">
              <button className="btn btn-solid-primary w-100 mx-0">Login</button>
            </div>
            <p className="text-center">
              <Link to="/signup">
                Create New Account
                <i className="fa-solid fa-greater-than"></i>
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
