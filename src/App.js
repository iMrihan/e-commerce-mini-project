import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/Pages/HomePage";
import Shoppage from "./Components/Pages/Shoppage";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections/all" element={<Shoppage />} />
        <Route path="/collections/all/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
