import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import "../style/AddProduct.css";
import Box from "@mui/material/Box";


// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   borderRadius: "10px",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

const AddProduct = () => {

  const [userRegistration, setUserRegistration] = useState({
    id: "",
    First_name: "",
    Last_name: "",
     email:""
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
  
    const data = JSON.parse(localStorage.getItem("users")) || [];
    
    data.push(userRegistration);
    localStorage.setItem("users", JSON.stringify(data));
    setUserRegistration({
      id: "",
      First_name: "",
      Last_name: "",
       email:""
    });
  };

  return (
    <>
        <div className='box1'>
          <Box
            className='box2'
            sx={{
              border: 1,
              padding: 2,
              borderColor: "#cccccc",
              width: "350px",
              marginTop: 2,
            }}
          >
            <form className="container1" onSubmit={handleSubmit}>
              <h2 id='Formheading'>Add Product</h2>
              <TextField
                className="textbox"
                label="id"
                variant="filled"
                required
                placeholder=""
                value={userRegistration.id}
                onChange={handleInput}
                name="id"
                id="id"
              />
              <TextField
                className="textbox"
                label="firstname"
                variant="filled"
                required
                placeholder=""
                value={userRegistration.First_name}
                onChange={handleInput}
                name="First_name"
                id="First_name"
              />
              <TextField
                className="textbox"
                label="Lastname"
                variant="filled"
                required
                placeholder=""
                value={userRegistration.Last_name}
                onChange={handleInput}
                name="Last_name"
                id="Last_name"
              />
              <TextField
                className="textbox"
                label="email"
                variant="filled"
                required
                placeholder=""
                value={userRegistration.email}
                onChange={handleInput}
                name="email"
                id="email"
              />
         
              <div>
                <Stack direction="row" spacing={1}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{
                      marginTop: "13px",
                      height: "31px",
                      backgroundColor: "#f0c14b",
                      color: "black",
                      borderColor: "#a88734 #9c7e31 #846a29",
                      textTransform: "none",
                    }}
                  >
                    Add User
                  </Button>
                </Stack>
              </div>
            </form>
          </Box>
        </div>
    </>
  );
};

export default AddProduct;
