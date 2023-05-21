import "./App.css";
// import { Home } from "./pages/Home/Home";

import { Route, Routes } from "react-router-dom";

import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
