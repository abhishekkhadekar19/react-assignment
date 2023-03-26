import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SingleProduct = () => {
  const { productid } = useParams();
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

  const data = Data.find((Data) => Data.id === Number(productid));
  console.log(data);
  // const { first_name, last_name } = data;
  const Navigate = useNavigate();
  return (
    <div>
      {/* {first_name}
      {last_name} */}
      <button onClick={() => Navigate("/about")}>dfdfdfdfdf</button>
    </div>
  );
};

export default SingleProduct;
