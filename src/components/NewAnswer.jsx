import React, { Component } from "react";
import DrawCanvas from "./DrawCanvas";

class NewAnswer extends Component {
  state = {
    playerToDraw: true,
    textInput: "",
    drawInput: ""
  };

  render() {
    console.log(this.state.drawInput);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.state.playerToDraw ? (
            <DrawCanvas updateDrawInput={this.updateDrawInput} />
          ) : (
            <input id="textInput" type="text" onChange={this.handleChange} />
          )}
          <button type="submit">Send your answer!</button>
        </form>
      </div>
    );
  }

  updateDrawInput = drawInput => {
    this.setState({ drawInput });
  };

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submitted answer");
  };
}

export default NewAnswer;
