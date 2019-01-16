import React, { Component } from "react";
import Dropdown from "./Dropdown.js";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

/*var siteList = [
  {
    address: "NA",
    author: "NA",
    created_at: "2018-12-18 16:40:30 UTC",
    description:
      "Trader Joes location. passed by around midnight. Many white bags in front of entrance contained meat and poultry; other items included hummus, thawed frozen food;",
    id: 1756028,
    lat: 40.79071,
    lng: -73.96951,
    unverified: "FALSE",
    updated_at: "2018-12-18 16:40:30 UTC",
    _id: "5c3cd95de77ba2d6bb05b7ff"
  }
];*/
//var freshList = [1, 2];
var freshList = [];
var numbers = [1, 2, 3, 4, 5];

//just testing
const testList = [
  { description: "Starbucks", id: "2", created_at: "2014-03-08 01:35:48 UTC" },
  { description: "Juice Town", id: "4", created_at: "2014-03-08 01:35:48 UTC" },
  { description: "Best Bagel", id: "5", created_at: "2014-03-08 01:35:48 UTC" }
];

/*const printItem = timeValue => {
  return (
    <div>
      <h1>here is val</h1>
      <p>{timeValue}</p>
    </div>
  );
};*/

function NumberList(props) {
  const testList = props.testList;
  const listItems = testList.map((number, index) => (
    //console.log("number", number.index)
    <li key={index}>{number.id}</li>
  ));
  return <ul>{listItems}</ul>;
}
function SpotList(props) {
  const freshList = props.freshList;
  const listSpots = freshList.map(
    (spot, index) => console.log("spot", spot)
    //<li key={index}>{number.id}</li>
  );
  return <ul>{listSpots}</ul>;
}

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
          let res = JSON.parse(http.response);

          Object.keys(res).forEach(key => {
            let value = res[key];
            var siteTime = value.created_at;
            if (siteTime > "2014-03-06 01:35:48 UTC") {
              //3 days
              //console.log("a good value", value["created_at"]);
              freshList.push(value);
            }

            //console.log("hey", value.description);
            //siteList.push(value);
            //use key and value here
          });

          /*for (const spot in res) {
            //turn created_at into seconds
            console.log(res);

            //console.log("here is row", res[row].created_at);
            //console.log("here is a time", row.created_at);
            //var siteTime = res[row].created_at;
            //console.log(siteTime);
            if (siteTime > "2014-03-06 01:35:48 UTC") {
              //3 days
              //push qualifying objects to array
              siteList[row] = res[row];

              //the row is the entire object
              spot = spot + 1;
              console.log("spot", spot);
            }
          }*/
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
        {/*Object.keys(freshSite).forEach(key => {
          let value = freshSite[key];
          console.log("hey render", value);
          console.log("a good value", value["created_at"]);

          //console.log("hey", value.description);
          //siteList.push(value);
          //use key and value here
        })*/}
        <NumberList testList={testList} />
        <SpotList freshList={freshList} />
      </div>
    );
  }
}

export default Feed;
