import React from "react";
import { Link } from "react-router-dom";
import CustomNavlink from "../elements/CustomNavlink";
import "../styles/CustomNavbar.css";

export default function CustomNavbar() {
  return (
    <div className="navbar">
      <nav expand="md" sticky="top">
        <Link className="navbrand" to={"/home"}>
          Barney Napier
        </Link>
        <span className="navtabs">
          <CustomNavlink to="/home" text="Home" />
          <CustomNavlink to="/about" text="About" />
        </span>
      </nav>
    </div>
  );
}
