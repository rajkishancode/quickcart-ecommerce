import React from 'react';

import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {

    const getData = async() => {
        try{
            const credentials = {
              email: "adarshbalika@gmail.com",
              password: "adarshbalika",
            };   
            const res = await fetch("/api/auth/login",
                {method:"POST",
                  body:JSON.stringify(credentials)  
                }
                );
                const { encodedToken } = await res.json();
                localStorage.setItem("encodedToken", encodedToken);
                

        }
        catch(err){
            console.error(err)
        }
    } 
    return (
      <>
        <main className="hero">
          <Link to="/product">
            <img
              className="hero-image img-responsive"
              src="https://i.postimg.cc/MHcyTP28/clothing.webp"
              alt="clothing image"
            />
          </Link>
        </main>

        <section className="my-10 section-categories">
          <div className="auth-container">
            <div className="category">
              <Link to="/product">
                <img
                  className="category-image"
                  src="https://i.postimg.cc/02wY1B0Y/printed-shirt.webp"
                  alt="Printed Shirt"
                />
              </Link>

              <p className="category-text">Printed Shirts</p>
            </div>
            <div className="category">
              <Link to="/product">
                <img
                  className="category-image"
                  src="https://i.postimg.cc/gJ7ZfVwt/jacket.webp"
                  alt="Jackets"
                />
              </Link>

              <p className="category-text">Jackets</p>
            </div>
            <div className="category">
              <Link to="/product">
                <img
                  className="category-image"
                  src="https://i.postimg.cc/XY6wjksT/check-suit.jpg"
                  alt="Check Suit"
                />
              </Link>

              <p className="category-text">Check Suit</p>
            </div>
            <div className="category">
              <Link to="/product">
                <img
                  className="category-image"
                  src="https://i.postimg.cc/KYZBLvSf/shirt.webp"
                  alt="Shirts"
                />
              </Link>

              <p className="category-text">Shirts</p>
            </div>
            <div className="category">
              <Link to="/product">
                <img
                  className="category-image"
                  src="https://i.postimg.cc/PxJD33q8/brown-hoodie.webp"
                  alt="Brown Hoodie"
                />
              </Link>

              <p className="category-text">Hoodies</p>
            </div>
          </div>
        </section>

        <section className="section-new-arrivals my-10">
          <div className="auth-container">
            <div className="card card-horizontal p-8 w-50">
              <Link to="/product">
                <img
                  className="card-image"
                  src="https://i.postimg.cc/QNPQP31N/summer.webp"
                  alt="summer printed tshirt"
                />
              </Link>

              <div className="card-content">
                <p className="text-uppercase">new arrivals</p>
                <h3 className="h3 mt-auto fw-600">Summer Collection</h3>
                <p className="text-base m-0 lh-10">
                  Discover the best brands for summer wear & enjoy the season in
                  style
                </p>
              </div>
            </div>

            <div className="card card-horizontal p-8">
              <Link to="/product">
                <img
                  className="card-image"
                  
                  src="https://i.postimg.cc/CxCbzntd/yellow-shirt.webp"
                  alt="Yellow Shirt"
                />
              </Link>

              <div className="card-content">
                <p className="text-uppercase">new arrivals</p>
                <h3 className="h3 mt-auto fw-600">Summer Collection</h3>
                <p className="text-base m-0 lh-10">
                  Discover the best brands for summer wear & enjoy the season in
                  style
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}