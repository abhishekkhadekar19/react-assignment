import "./App.css";
import Home from "./components/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SingleProduct from "./components/SingleProduct";
import Products from "./components/Products";
import Trycontext from "./components/tryContext";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { UserDataContext } from "./context/dataContext";
import AddProduct from "./components/AddProduct";
import AddedProduct from "./components/AddedProduct";
function App() {
  const [users, setUsers] = useState();
  useEffect(() => {
    axios.get(`https://reqres.in/api/users`).then((response) => {
      setUsers(response?.data?.data)
    })
  }, [])
  
const Router = () => {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products/:productid" element={<SingleProduct />} />
            <Route path="users" element={<Products />} />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="addedproduct" element={<AddedProduct />} />
            <Route path="Trycontext" element={<Trycontext />} />
          </Route>
        </Routes>
        </div>
    );
  };
  return (

    <UserDataContext.Provider value={users}>
    <BrowserRouter>
    <div className="App">{Router()}</div>
    </BrowserRouter>
    </UserDataContext.Provider>
    
  );
}

export default App;

