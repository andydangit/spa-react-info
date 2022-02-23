import React from "react";
import logo from "../image/react.png";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="React Logo" width="50px" />
      <h2> React Facts </h2>
    </nav>
  );
}

export default Navbar;
