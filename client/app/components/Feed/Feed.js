import React, { Component } from "react";
import "./Feed.css";
import Dropdown from "./Dropdown.js";

class Feed extends Component {
  render() {
    return (
      <div>
        <h1> Visit Feed</h1>
        <Dropdown />

        <div id="feed-body">
          <ul className="site-list">
            <li>Dumpster outside of Associated</li>
            <li>Starbucks</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Feed;
