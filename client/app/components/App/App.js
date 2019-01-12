import React, { Component } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Feed from "../Feed/Feed";

const App = ({ children }) => (
  <>
    <Header />

    <main>{children}</main>
    <Feed />
    <Footer />
  </>
);

export default App;
