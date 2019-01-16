import React from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import App from "./components/App/App";
import NotFound from "./components/App/NotFound";
import UserSystem from "./components/UserSystem/UserSystem";
import Map from "./components/Map/Map";
import Feed from "./components/Feed/Feed";
import Directory from "./components/Directory/Directory";

import "./styles/styles.scss";

render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={UserSystem} />
        <Route path="/directory" component={Directory} />
      </Switch>
    </App>
  </Router>,
  document.getElementById("app")
);
