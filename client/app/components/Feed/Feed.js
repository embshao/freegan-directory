import React, { Component } from "react";
import Dropdown from "./Dropdown.js";

class Feed extends Component {
  render() {
    return (
      <div className="feed-body">
        <h1> Visit Feed</h1>
        <Dropdown />
        <ul className="site-list">
          <li>Dumpster outside of Associated</li>
          <li>Starbucks</li>
          <li>Best Bagel</li>
          <li>Juice Town</li>
          <li>Sunrise Deli</li>
        </ul>
      </div>
    );
  }
}

export default Feed;
