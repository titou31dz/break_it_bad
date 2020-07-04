import React from "react";
import { Link } from "react-router-dom";

import Logo from "../component/Logo";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-container">
        <Link to="/">
          <Logo />
        </Link>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
