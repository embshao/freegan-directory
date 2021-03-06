import React from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import { InputLabel } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { OpenStreetMapProvider } from "leaflet-geosearch";
const provider = new OpenStreetMapProvider();
import "whatwg-fetch";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const container = {
  display: "flex",
  flexWrap: "wrap"
};
const textField = {
  marginLeft: "10px",
  marginRight: "10px"
};
const image = {
  height: "40px",
  display: "inline-block",
  float: "left"
};

class Site extends React.Component {
  constructor() {
    super();

    this.state = {
      address: "",
      description: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onTextboxChangeAddress = this.onTextboxChangeAddress.bind(this);
    this.onTextboxChangeDescription = this.onTextboxChangeDescription.bind(
      this
    );
  }

  onTextboxChangeAddress(event) {
    this.setState({
      address: event.target.value
    });
  }

  onTextboxChangeDescription(event) {
    this.setState({
      description: event.target.value
    });
  }

  handleSubmit(submitEvent) {
    submitEvent.preventDefault();
    // Grab state
    const { address, description } = this.state;

    provider.search({ query: address }).then(function(result) {
      fetch("/freegan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          lat: result[0].y,
          lng: result[0].x,
          unverified: "",
          description: description,
          author: "",
          address: address,
          created_at: Date(Date.UTC(2018, 11, 1, 0, 0, 0)),
          updated_at: Date(Date.UTC(2018, 11, 1, 0, 0, 0))
        })
      });

      console.log("sucess");
    });
  }

  render() {
    const { address, description } = this.state;

    return (
      <div>
        <img style={image} src="/assets/img/trash.png" />
        <Typography component="h5" variant="h4" gutterBottom>
          Add a new spot here!
        </Typography>

        <form>
          <TextField
            id="outlined-name"
            label="Address"
            style={textField}
            value={address}
            onChange={this.onTextboxChangeAddress}
            margin="normal"
            variant="outlined"
          />
          {/* <input type="text" placeholder="Address" value={address} onChange={this.onTextboxChangeAddress}/> */}

          <TextField
            id="outlined-name"
            label="Description"
            style={textField}
            value={description}
            onChange={this.onTextboxChangeDescription}
            margin="normal"
            variant="outlined"
          />
          <br />
          <br />
          <Button
            variant="outlined"
            style={textField}
            color="secondary"
            onClick={this.handleSubmit}
          >
            Submit!
          </Button>
        </form>
      </div>
    );
  }
}

export default Site;
