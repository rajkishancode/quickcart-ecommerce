import "./App.css";
import { Home } from "./pages/Home/Home";
import { Product } from "./pages/Product/Product";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { Login } from "./pages/Auth/Login/Login";
import { Cart } from "./pages/Cart/Cart";
import { Signup } from "./pages/Auth/Signup/Signup";
import { Header } from "./components/Header/Header";

import { Route, Routes } from "react-router-dom";

import MockAPI from "./pages/Mockman";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
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
