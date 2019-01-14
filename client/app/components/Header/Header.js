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
  width: "90px"
};

const Header = () => (
  <header style={headerStyle}>
    <h1>Freegan Directory</h1>
    <div>
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
