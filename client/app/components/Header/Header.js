import React from "react";
//import styles from "../../styles/styles.scss";

import { Link } from "react-router-dom";
const headerStyle = {
  fontSize: "15px",
  color: "#486641"
};
const navStyle = {
  display: "inline-block",
  width: "200px",
  color: "#486641"
};
const textStyle = {
  padding: "30px"
};
const Header = () => (
  <header style={headerStyle}>
    <div style={textStyle}>
    <img src="/assets/img/logo.png"></img>

      <h1 style={navStyle}>forage</h1>
      <nav style={navStyle}>
        <Link to="/">Sign In/Sign Up</Link>
      </nav>
      <nav style={navStyle}>
        <Link to="/about">About</Link>
      </nav>
      <nav style={navStyle}>
        <Link to="/directory">Directory</Link>
      </nav>
      <nav style={navStyle}>
        <Link to="/testFeed">TestFeed</Link>
      </nav>
    </div>
    <hr />
  </header>
);

export default Header;
