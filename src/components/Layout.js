import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../App.css'
const Layout = () => {
  return (
    <div >
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/users">Users</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/addproduct">Add new user</a>
        </li>
      </ul>    
    </div>
  </div>
</nav>
      <Outlet />
      
    </div>
   
  );
};

export default Layout;
