import React from "react";
//import styles from "../../styles/styles.scss";

import { Link } from "react-router-dom";
const headerStyle = {
  backgroundColor: "ivory",
  fontSize: "20px",
  color: "pink"
};
const navStyle = {
  display: "inline-block",
  width: "200px"
};
const textStyle = {
  padding: "30px"
};
const Header = () => (
  <header style={headerStyle}>
    <div style={textStyle}>
      <h1 style={navStyle}>Freegan Directory</h1>
      <nav style={navStyle}>
        <Link to="/">Home</Link>
      </nav>
      <nav style={navStyle}>
        <Link to="/helloworld">Hello World</Link>
      </nav>
      <nav style={navStyle}>
        <Link to="/directory">Directory</Link>
      </nav>
    </div>
    <hr />
  </header>
);

export default Header;
