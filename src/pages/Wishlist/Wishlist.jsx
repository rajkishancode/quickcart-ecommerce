import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../../components";
import { useDocumentTitle, useUserData, useAuth } from "../../hooks";
import { fetchWishlist } from "../../contexts/Providers/UserDataProvider/helpers";
import "./Wishlist.css";

export const Wishlist = () => {
     const { userDataState, userDataDispatch } = useUserData();
     const { wishlist } = userDataState;
     const {
       authState: { token },
     } = useAuth();

     useDocumentTitle("wishlist | Quickcart");

     useEffect(() => {
       fetchWishlist(token, userDataDispatch);
     }, []);


     const item =
       wishlist.length === 0 ? (
         <main className="flex-col mx-auto">
           <h3>Oh no! Your wishlist is empty.</h3>
           <h4>Wishlist Items To View Them Here</h4>
           <div className="view-product">
             <Link className="btn btn-solid-primary" to={"/products"}>
               View Products
             </Link>
           </div>
         </main>
       ) : (
         wishlist.map((prod) => (
           <ProductCard key={prod._id} info={{ prod }} classes={"mw-300"} wish />
         ))
       );

  return (
    <main class="wishlist mb-10">
      <h3 class="h3 text-center mt-10 mb-6">Your Wishlist</h3>
      <div class="auth-container  ">
        {item}

      </div>
    </main>
  );
};


 