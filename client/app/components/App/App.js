import React, { Component } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Map from "../Map/Map";
const selectStyle = {
  minWidth: "150px"
};

const App = ({ children }) => (
  <>
    <Header />

    <main>{children}</main>
    <Map />
    <Footer />
  </>
);

export default App;
