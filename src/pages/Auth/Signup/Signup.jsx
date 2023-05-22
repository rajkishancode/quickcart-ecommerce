import React from 'react'
import { Link } from "react-router-dom";
import "../Auth.css";


export const Signup = () => {
  return (
    <div>
      {" "}
      <main className="auth mt-10">
        <div className="auth-container mt-5 ">
          <div className="auth-content mx-auto p-10">
            <h3 className="text-center mt-0">Signup</h3>
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
                I accept all Terms & Conditions
              </label>
            </div>
            <div className="my-6">
              <button className="btn btn-solid-primary w-100 mx-0">
                Create New Account
              </button>
            </div>
            <p className="text-center">
              <Link to="../login/login.html" className="">
                Already have an account
                <i className="fa-solid fa-greater-than"></i>
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
