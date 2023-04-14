import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../context/dataContext";
import '../App.css'
import AddedProduct from "./AddedProduct";
const Products = () => {
  const users = useContext(UserDataContext);
console.log(users)

  // useEffect(() => {
  //   fetchUserData();

  // }, []);
  // console.log(Data);
  // console.log(typeof Data);
  return (
    <div className="main">
      <table class="table">
  <thead>
      <tr>
      <th scope="col"> Id</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">email</th>
    </tr>
        </thead>
        {users?.map((Data) => (
          <tbody>
            <tr>
              <th scope="row">{Data.id}</th>
              <td>{Data.first_name}</td>
              <td>{Data.last_name}</td>
              <td>{Data.email}</td>
              <td><Link to={`/products/${Data.id}`}>more info</Link></td>
            </tr>
          </tbody>
        ))}
</table>
      <div>
     <AddedProduct/></div>
    </div>
  );
}

export default Products;
