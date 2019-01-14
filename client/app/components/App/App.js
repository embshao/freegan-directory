import React, { Component } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Map from "../Map/Map";
import Feed from "../Feed/Feed";

const App = ({ children }) => (
  <>
    <Header />

    <main>{children}</main>
    <Map />
    <Feed />
    <Footer />
  </>
);

export default App;
