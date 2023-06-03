import { Link } from "react-router-dom";
import CarouselCard from "../../components/Card/CarouselCard/CarouselCard";

import "./Home.css";

export const Home = () => {
  const getData = async () => {
    try {
      const credentials = {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
      };
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials),
      });
      const { encodedToken } = await res.json();
      localStorage.setItem("encodedToken", encodedToken);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <main className="hero">
        <Link to="/products">
          <img
            className="hero-image img-responsive"
            src="https://i.postimg.cc/MHcyTP28/clothing.webp"
            alt="clothing image"
          />
        </Link>
      </main>

      <section className="my-10 section-categories">
        <div className="auth-container">
          <CarouselCard
            src={"https://i.postimg.cc/K8zD01dx/hm-shirt-1.jpg"}
            text={"Shirt"}
          />

          <CarouselCard
            src={"https://i.postimg.cc/tgntHLqc/hm-hoodie-1.jpg"}
            text={"Hoodie"}
          />

          <CarouselCard
            src={"https://i.postimg.cc/ncT1K4S3/hm-jacket-1.webp"}
            text={"Jacket"}
          />

          <CarouselCard
            src={"https://i.postimg.cc/dtTcgCP0/h-m-tshirt-2.webp"}
            text={"TShirt"}
          />

          <CarouselCard
            src={"https://i.postimg.cc/kgqrf5cB/lp-blazer-1.webp"}
            text={"Suit"}
          />
        </div>
      </section>

      <section className="section-new-arrivals my-10">
        <div className="auth-container">
          <div className="card card-horizontal p-8 w-50">
            <Link to="/products">
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
            <Link to="/products">
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
};
