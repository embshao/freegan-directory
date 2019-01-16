import React from "react";
import Map from "../Map/Map";
import Feed from "../Feed/Feed";
import Grid from "@material-ui/core/Grid";

const directoryStyle = {
  padding: "30px"
};
const Directory = () => (
  <div style={directoryStyle}>
    <Grid container spacing={24}>
      <Grid item xs={7}>
        <Map />
      </Grid>

      <Grid item xs={5}>
        <div id="feedDiv">
          <Feed />
        </div>
      </Grid>
    </Grid>
  </div>
);

export default Directory;
