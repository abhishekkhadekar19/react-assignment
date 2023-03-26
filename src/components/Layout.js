import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Link to="/">back to home</Link>
      <Link to="/product">back to product</Link>
      <Outlet/>
    </div>
  );
};

export default Layout;
