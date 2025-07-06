// src/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={navStyle}>
      <h2 style={{ margin: 0 }}>Northeast Tour</h2>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/blogs" style={linkStyle}>Blog</Link>
        <Link to="/login" style={linkStyle}>Admin</Link>
      </div>
    </nav>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 30px",
  backgroundColor: "#005f73",
  color: "white"
};

const linkStyle = {
  marginLeft: "20px",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};

export default Navbar;
