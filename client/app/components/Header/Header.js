import React from "react";
//import styles from "../../styles/styles.scss";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';


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
        <Button><Link style={navStyle}to="/">Sign In/Sign Up</Link></Button>
      </nav>
    
      <nav style={navStyle}>
      <Button><Link style={navStyle} to="/directory">Directory</Link></Button>
      </nav>
      <nav style={navStyle}>
      <Button> <Link style={navStyle} to="/testFeed">TestFeed</Link></Button>
      </nav>
    </div>
    <hr />
  </header>
);

export default Header;
