import React, { Component } from "react";
import DrawCanvas from "./DrawCanvas";

class PlayScreen extends Component {
  state = {
    playerToDraw: true,
    textInput: "",
    drawInput: ""
  };

  render() {
    return (
      <div>
        {/* <PrevAnswer /> */}
        <form>
          {this.state.playerToDraw ? (
            <DrawCanvas />
          ) : (
            <input id="textInput" type="text" onChange={this.handleChange} />
          )}
          <button type="submit">Send your answer!</button>
        </form>
      </div>
    );
  }

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };
}

export default PlayScreen;
