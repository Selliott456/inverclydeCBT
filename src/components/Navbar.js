import React from "react";
import head from "../styles/head.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="nav">
      <ul id="navList">
        <Link to="/home">
          <img id="navLogo" src={head} alt="CBT Inverclyde Logo" />
        </Link>
        <Link className="navButton" to="/home">
          Home
        </Link>
        <Link className="navButton" to="/services">
          Services
        </Link>
        <Link className="navButton" to="/willwork">
          Will CBT Work For Me?
        </Link>
        <Link className="navButton" to="/fees">
          Fees
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
