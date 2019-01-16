import React from "react";
import Map from "../Map/Map";
import Feed from "../Feed/Feed";
import Grid from "@material-ui/core/Grid";
import Site from "../Site/Site";

const sitestyle = {
  display: "inline-block",
  marginLeft: "30px"
};
const directoryStyle = {
  padding: "30px"
};

const Directory = () => (
  <div style={directoryStyle}>
    <Grid container spacing={24} direction="row">
      <Grid item xs={7} />
      <Map />
      <Grid item xs={5} direction="column">
        <div style={sitestyle}>
          <Site />
        </div>

        <Feed />
      </Grid>
    </Grid>
  </div>
);

export default Directory;
