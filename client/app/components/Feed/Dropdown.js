import React, { Component } from "react";

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
    alert("Selected neighborhood " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
        <label>
          Neighborhood:
          <select value={this.state.value} onChange={this.handleDropdownChange}>
            <option value="midtown">Midtown</option>
            <option value="chinatown">Chinatown</option>
            <option value="east-village">East Village</option>
            <option value="west-village">West Village</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Dropdown;
