import React from "react";
import { useParams } from "react-router-dom";

import { UserDataContext } from "../context/dataContext";
import { useContext } from "react";
const SingleProduct = () => {
  const { productid } = useParams();
  const users = useContext(UserDataContext);
// without using context api
  // const fetchUserData = () => {
  //   fetch("https://reqres.in/api/users?page=2")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setData(data.data);
  //     });
  // };

  // useEffect(() => {
  //   fetch("https://reqres.in/api/users?page=2")
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     setData(data.data);
  //   });
  // }, []);

// useEffect(() => {
//     axios.get('https://reqres.in/api/users?page=2')
//       .then((res) => res.data)
//     .then((data) => setData(data.data))
// }, []);
  
  const data = users.find((Data) => Data.id === Number(productid)) || {}; 
  console.log(data);
  const { first_name='', last_name='' } = data;

  return (
    <div>
      {first_name && <span>{first_name}</span>}
      {last_name && <span>{last_name}</span>}
    </div>
  );
};

export default SingleProduct;
