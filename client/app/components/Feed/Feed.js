import React, { Component } from "react";
import Dropdown from "./Dropdown.js";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

var siteList = [];

//just testing
const testList = [
  { description: "Starbucks", id: "2", created_at: "2014-03-08 01:35:48 UTC" },
  { description: "Juice Town", id: "4", created_at: "2014-03-08 01:35:48 UTC" },
  { description: "Best Bagel", id: "5", created_at: "2014-03-08 01:35:48 UTC" }
];
//const listTest = testList.map(test => <li>{test.description}</li>);

class Feed extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //time now
    var start = new Date();
    var currentTime = start.toUTCString();
    console.log(currentTime);

    let url = "/freegan";
    let http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onload = function() {
      if (http.readyState === 4) {
        if (http.status === 200) {
          console.log("wassup connected");
          let res = JSON.parse(http.response);
          for (let row of res) {
            //turn created_at into seconds
            var siteTime = row.created_at;
            //console.log(siteTime);
            if (siteTime > "2014-03-06 01:35:48 UTC") {
              //3 days
              //siteList.push(row);
              siteList.push(row.description);
              //console.log(row.description);
            }
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
          {testList.map(test => (
            <div>
              <ListItem button>
                <ListItemText
                  primary={test.description}
                  secondary={test.created_at}
                />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </div>
    );
  }
}

export default Feed;
