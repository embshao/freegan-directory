import React, { Component } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const selectStyle = {
  minWidth: "150px"
};

const App = ({ children }) => (
  <>
    <Header />

    <main>{children}</main>

    <Footer />
  </>
);

export default App;
