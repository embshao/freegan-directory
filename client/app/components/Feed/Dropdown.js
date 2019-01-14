import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

import MenuItem from "@material-ui/core/MenuItem";

const selectStyle = {
  minWidth: "150px"
};

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToday: true,
      neighborhoodName: "Midtown"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDropdownChange(event) {
    this.setState({ value: event.target.value });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert("Selected neighborhood " + this.state.neighborhoodName);
    alert("Today is " + this.state.isToday);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <label>
          Is today:
          <input
            name="isToday"
            type="checkbox"
            checked={this.state.isToday}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <FormControl variant="outlined" onSubmit={this.handleSubmit}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-simple"
          >
            Neighborhood
          </InputLabel>
          <Select
            value={this.state.value}
            onChange={(this.handleDropdownChange, this.handleSubmit)}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="age"
                id="outlined-age-simple"
              />
            }
            style={selectStyle}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"chinatown"}>ChinaTown</MenuItem>
            <MenuItem value={"west-village"}>West Village</MenuItem>
            <MenuItem value={"east-village"}>East Village</MenuItem>
            <MenuItem value={"midtown"}>Midtown</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default Dropdown;
