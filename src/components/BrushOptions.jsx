import React, { Component } from "react";

class BrushOptions extends Component {
  render() {
    const { brushRadius, brushOptions } = this.props;
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
            value={brushRadius}
          />
        </label>
        <label>
          Brush colour:
          <select
            id="brushColour"
            onChange={this.handleChange}
            value={brushOptions}
          >
            <option value="#000000">Black</option>
            <option value="#808080">Dark grey</option>
            <option value="#C0C0C0">Light grey</option>
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
