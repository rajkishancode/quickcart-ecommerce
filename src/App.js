import "./App.css";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";

import { Route, Routes } from "react-router-dom";

import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
