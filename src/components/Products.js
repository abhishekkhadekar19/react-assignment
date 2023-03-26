import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import Productss from "../assests/data";

const Products = () => {
  const [Data, setData] = useState([]);

  const fetchUserData = () => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.data);
      });
  };

  useEffect(() => {
    fetchUserData();

  }, []);
  console.log(Data);
  console.log(typeof Data);
  return (
    <div>
      {Data.map((Data) => (
        <>
          <li key={Data.id}>{Data.first_name}</li>
          <Link to={`/products/${Data.id}`}>more info</Link>
        </>
      ))}
    </div>
  );
};

export default Products;
