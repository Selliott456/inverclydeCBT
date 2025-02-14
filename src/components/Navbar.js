import React from "react";
import head from "../styles/head.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="nav">
      <ul id="navList">
        <Link to="/home">
          <img id="navLogo" src={head} alt="CBT Inverclyde Logo" />
        </Link>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navButton active" : "navButton"
          }
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navButton active" : "navButton"
          }
          to="/services"
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navButton active" : "navButton"
          }
          to="/willwork"
        >
          Will CBT Work For Me?
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navButton active" : "navButton"
          }
          to="/fees"
        >
          Fees
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
