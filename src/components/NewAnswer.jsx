import React, { Component } from "react";
import DrawCanvas from "./DrawCanvas";
import * as api from "../api";

class NewAnswer extends Component {
  state = {
    textInput: "",
    drawInput: ""
  };

  render() {
    const { turnNum } = this.props;
    return (
      <div className="bottomHalf">
        <form onSubmit={this.handleSubmit}>
          {turnNum % 2 === 0 ? (
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
    localStorage.setItem("pastDrawing", drawInput);
    this.setState({ drawInput });
  };

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { gameToken, userId, turnNum, currentThreadIndex } = this.props;
    const input =
      turnNum % 2 === 0 ? this.state.drawInput : this.state.textInput;
    api
      .sendThreadInput(
        input,
        turnNum,
        currentThreadIndex || userId,
        gameToken,
        userId
      )
      .then(() => {
        this.props.advanceTurn();
      });
  };
}

export default NewAnswer;
