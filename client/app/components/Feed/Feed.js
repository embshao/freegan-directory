import React, { Component } from "react";
import Dropdown from "./Dropdown.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const listStyle = {
  width: "100%"
};
const feedStyle = {
  fontSize: "10px",
  display: "inline-block",
  padding: "30px"
};
const testList = [
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
  },
  {
    id: 657239,
    lat: 40.722956,
    lng: -74.002582,
    unverified: "TRUE",
    description:
      "Gourmet Garage. NOTE that this is in reference to when the store was on Broome and Mercer, so may no longer apply:\n\nThis is the flagship store, so when you can get at it, its a motherlode. Several giant dumpsters on the Mercer Street side. Rumor has it that these dumpsters are sometimes locked; it is more likely that security or a night manager will yell at you and/or chase you away. Go after 11pm.",
    author: "herbieGB",
    address: "NA",
    created_at: "2018-11-05 08:00:10 UTC",
    updated_at: "2018-11-05 08:00:10 UTC"
  },
  {
    id: 665028,
    lat: 40.717985,
    lng: -73.989714,
    unverified: "FALSE",
    description:
      "BabyCakes (248 Broome St)\n\nYou can find tasty cakes and sweets. BabyCakes offers all natural, organic and delicious alternatives free from the common allergens: wheat, gluten, dairy, casein and eggs. Their cakes don't contain white sugar or toxic chemical sweeteners. At Sunday around 18:00 they put out the cakes in back plastic bags right outside the door.",
    author: "NA",
    address: "NA",
    created_at: "2018-03-06 01:20:02 UTC",
    updated_at: "2018-03-06 01:20:02 UTC"
  },
  {
    id: 665029,
    lat: 40.734719,
    lng: -73.989797,
    unverified: "FALSE",
    description:
      "Au Bon Pain (6 Union Square E)\n\nPlenty of bread in diverse forms like ciabatta, whole wheat multigrain bread and baguette can be found in big amounts. On Sunday around 17:00 they throw out bread and pastries left over from the weekend in big amounts which can last for the whole week. When you bring it home put it in the fridge and when you feel like having a sandwich simply put some water on the bread and put it in the oven. It comes out crispy and tasty.",
    author: "NA",
    address: "NA",
    created_at: "2018-03-06 01:20:03 UTC",
    updated_at: "2018-03-06 01:20:03 UTC"
  },
  {
    id: 665600,
    lat: 40.731727,
    lng: -73.994493,
    unverified: "FALSE",
    description:
      "Gristede's (25 University Pl)\nTONS of eggs, cheese, packaged goods, bread and some produce. They throw out lots of food regularly, really worth a look.",
    author: "NA",
    address: "NA",
    created_at: "2017-03-06 01:36:31 UTC",
    updated_at: "2017-01-05 08:32:11 UTC"
  },
  {
    id: 665498,
    lat: 40.807664,
    lng: -73.964437,
    unverified: "FALSE",
    description:
      "Morton Williams (2941 Broadway)\n\nWhen I've gone the staff have been in the process of throwing stuff out, around 9 or 9:30pm, and they were friendly enough about letting us dive away. It's a very busy corner, and well-lit, so its high-profile dumpster diving, not for the shy.",
    author: "NA",
    address: "NA",
    created_at: "2014-03-06 01:35:51 UTC",
    updated_at: "2014-03-06 01:35:51 UTC"
  },
  {
    id: 665499,
    lat: 40.803937,
    lng: -73.966643,
    unverified: "FALSE",
    description:
      "D'Agostino (2828 Broadway)\n\nI'm not sure what the best time is, but I think 9-9:30pm is when I've had good luck there.\n\nClosed permanently in April 2016",
    author: "NA",
    address: "NA",
    created_at: "2014-03-06 01:35:51 UTC",
    updated_at: "2016-07-29 00:13:24 UTC"
  },
  {
    id: 665500,
    lat: 40.80249,
    lng: -73.967517,
    unverified: "FALSE",
    description:
      "Absolute Bagels (2788 Broadway)\n\nThe usual bagel abundance, plenty fresh.",
    author: "NA",
    address: "NA",
    created_at: "2014-03-06 01:35:51 UTC",
    updated_at: "2014-03-06 01:35:51 UTC"
  },
  {
    id: 665501,
    lat: 40.802402,
    lng: -73.967554,
    unverified: "FALSE",
    description:
      "Garden of Eden (2780 Broadway)\n\nOne of the best diving sites in the city. Super high end fresh produce in huge plastic barrels, bags of fresh-made packaged entrees, loose buffet bar food, lots more. Enormous volume. Lots of exotic produce. You'll find stuff there from 9:30 or 10pm on.",
    author: "NA",
    address: "NA",
    created_at: "2014-03-06 01:35:52 UTC",
    updated_at: "2014-03-06 01:35:52 UTC"
  },
  {
    id: 665502,
    lat: 40.800518,
    lng: -73.967722,
    unverified: "FALSE",
    description:
      "Silver Moon Bakery (2740 Broadway)\n\nWe found meat and cheese sandwiches as well as bread.",
    author: "NA",
    address: "NA",
    created_at: "2014-03-06 01:35:52 UTC",
    updated_at: "2014-03-06 01:35:52 UTC"
  },
  {
    id: 665503,
    lat: 40.789534,
    lng: -73.97579,
    unverified: "FALSE",
    description:
      "Hot & Crusty (2393 Broadway)\n\nAll the bready stuff - muffins, pizza slices, rolls, croissants, etc. We had more luck with the store in the 80s.",
    author: "NA",
    address: "NA",
    created_at: "2014-03-06 01:35:53 UTC",
    updated_at: "2014-03-06 01:35:53 UTC"
  }
];

// function NumberList(props) {
//   const testList = props.testList;
//   const listItems = testList.map(
//     (number, index) => console.log("number", index)
//     //<li key={index}>{number.description}</li>
//   );
//   return <ul>{listItems}</ul>;
// }

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testItems: [],
      siteList: []
    };
    this.getTestItems = this.getTestItems.bind(this);
  }

  componentDidMount() {
    this.getTestItems();

    /*var start = new Date();
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
            console.log(value);
            if (siteTime > "2014-03-06 01:35:48 UTC") {
              //3 days
              //console.log("a good value", value["created_at"]);
              //freshList.push(value);

              this.setState({ items: value });
            }
            console.log("populated", freshList);
          });*/
  }

  getTestItems() {
    let testItems = [];
    let siteList = [];

    var start = new Date();
    //var currentTime = start.toUTCString();

    let url = "/freegan";
    let http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onload = function() {
      if (http.readyState === 4) {
        if (http.status === 200) {
          let res = JSON.parse(http.response);
          //console.log(res);
          //this.setState({ siteList: res });

          // Object.keys(res).forEach(key => {
          //   let site = res[key];

          //this.setState({ testItems: [...this.state.testItems, ...value] });

          //testItems.push(value); //need to do setstate her einstead
          // this.setState(prevState => ({
          //   testItems: [{ key: value }, ...prevState.testItems]
          // }));

          /*Object.keys(testList).forEach(key => {
            let value = testList[key];
            var siteTime = value.created_at;
            if (siteTime > "2014-03-06 01:20:03 UTC") {
              console.log("bigger", value);
              testItems.push(value);
            }
            console.log(testItems);
            //this.setState({ testItems: [...this.state.testItems, ...value] });
          });*/
        }
      }
    };

    // ids.forEach(id => {
    //   testItems.push(id);
    // });
    // console.log("yo", testItems);
    console.log(this.state.siteList);
  }

  render() {
    return (
      <div style={feedStyle}>
        <Typography component="h6" variant="h6" gutterBottom>
          Live Feed
        </Typography>
        <Dropdown />
        <List style={listStyle}>
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

        {/*{Object.keys(freshSite).forEach(key => {
          let value = freshSite[key];
          console.log("hey render", value);
          console.log("a good value", value["created_at"]);

          //console.log("hey", value.description);
          //siteList.push(value);
          //use key and value here
        })}
        <h1>
          {this.state.freshList.map(function(item, index) {
            return <h1 key={index}>{item.created_at}</h1>;
          })}
        </h1>
        <NumberList testList={testList} />*/}
      </div>
    );
  }
}

export default Feed;
