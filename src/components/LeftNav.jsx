import React from "react";
import "./LeftNav.css";
import { Link } from "react-router-dom";


export const LeftNav = () => {
  return (
    <div className="navbar">
      <div className="logo">PROJ</div>
      <hr />
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/dashboard"> dashboard </Link>
        <Link to="/product"> product </Link>
        <Link to="/seller"> seller </Link>
        <Link to="/buyer"> buyer </Link>
        <Link to="/product"> product </Link>

      </div>
    </div>
  );
};
