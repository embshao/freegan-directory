import React, { Component } from "react";

class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      nameOfSite: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Name of site:
          <input
            name="nameOfSite"
            type="string"
            value={this.state.nameOfSite}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

export default Entry;
