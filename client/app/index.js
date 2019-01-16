import React from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import App from "./components/App/App";
import NotFound from "./components/App/NotFound";
import UserSystem from "./components/UserSystem/UserSystem";

import Feed from "./components/Feed/Feed";

import "./styles/styles.scss";

render(
  <Router>
    <App>
      <Switch>
        <Route path="/testFeed" component={Feed} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </Router>,
  document.getElementById("app")
);
