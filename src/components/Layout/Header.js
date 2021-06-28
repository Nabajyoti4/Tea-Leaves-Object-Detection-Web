import React from "react";
import "./Header.css";
import { NavLink as Link } from "react-router-dom";
import EcoIcon from "@material-ui/icons/Eco";

function Header() {
  return (
    <nav>
      <Link to="/" className="logo">
        <EcoIcon
          style={{
            color: "green",
            fontSize: "50px",
          }}
        ></EcoIcon>
      </Link>
      <ul className="menu">
        <li>
          <Link to="/" className="home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/project-detail" className="home">
            Project Overview
          </Link>
        </li>
        <li>
          <Link to="/object-detection" className="home">
            Object Detection
          </Link>
        </li>
        <li>
          <Link to="/prediction" className="home">
            Predict
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
