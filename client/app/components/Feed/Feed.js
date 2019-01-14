import React, { Component } from "react";
import Dropdown from "./Dropdown.js";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

class Feed extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let url = "/freegan";
    let http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onload = function() {
      if (http.readyState === 4) {
        if (http.status === 200) {
          console.log("wassup connected");
          let res = JSON.parse(http.response);
          console.log(res);
          for (let row of res) {
            console.log(row.created_at);
          }
        }
      }
    };
  }

  render() {
    return (
      <div className="feed-body">
        <h1> Visit Feed</h1>
        <Dropdown />

        <List>
          <ListItem button>
            <ListItemText primary="Dumpster outside of Associated" />
          </ListItem>
          <Divider />
          <ListItem button>
            {/*<ListItemIcon>*/}
            <ListItemText primary="Starbucks" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Best Bagel" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Juice Town" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Sunrise Deli" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default Feed;
