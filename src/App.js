import "./App.css";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { Login } from "./pages/Auth/Login/Login";
import { Cart } from "./pages/Cart/Cart";
import { Signup } from "./pages/Auth/Signup/Signup";
import { Header } from "./components/Header/Header";

import { Route, Routes } from "react-router-dom";

import MockAPI from "./pages/Mockman";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer
        theme="dark"
        autoClose={1200}
        limit="2"
        position="bottom-left"
        style={{ fontSize: "18px" }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:categoryName" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
    </div>
  );
}

export default App;
