import React, { Component } from "react";

class BrushOptions extends Component {
  render() {
    return (
      <>
        <label>
          Brush Size:
          <input
            type="number"
            name="brushRadius"
            id="brushRadius"
            min="5"
            max="10"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Brush colour:
          <select id="brushColour" onChange={this.handleChange} value="#000000">
            <option value="#C0C0C0">Light grey</option>
            <option value="#808080">Dark grey</option>
            <option value="#000000">Black</option>
          </select>
        </label>
      </>
    );
  }

  handleChange = e => {
    this.props.updateBrushOptions(e.target.id, e.target.value);
  };
}

export default BrushOptions;
