import "./App.css";

import Home from "./components/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import SingleProduct from "./components/SingleProduct";
import Products from "./components/Products";
function App() {
  const Router = () => {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products/:productid" element={<SingleProduct />} />
            <Route path="product" element={<Products />} />
          </Route>
        </Routes>
      </div>
    );
  };
  return (
    <BrowserRouter>
      <div className="App">{Router()}</div>
    </BrowserRouter>
  );
}

export default App;
