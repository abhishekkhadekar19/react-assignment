import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { UserDataContext } from "../context/dataContext";
import '../App.css'
const AddedProduct = () => {
  const usersData = JSON.parse(localStorage.getItem("users")) || [];
  return (
    <div className="main">
      <h2>newly added user</h2>
       <table class="table">
        {usersData?.map((Data) => (
          <tbody>
            <tr>
              <th scope="row">{Data.id}</th>
              <td>{Data.First_name}</td>
              <td>{Data.Last_name}</td>
              <td>{Data.email}</td>
              <td><Link className="More-info" to={`/products/${Data.id}`} >more info</Link></td>
            </tr>
          </tbody>
        ))}
</table>

    </div>
  );
}

export default AddedProduct;
