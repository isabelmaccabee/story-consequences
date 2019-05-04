import React, { Component } from "react";

class GameCreate extends Component {
  state = {
    nameInput: ""
  };

  render() {
    const { nameInput } = this.state;
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="nameInput" />
          <input
            onChange={this.handleChange}
            value={nameInput}
            id="nameInput"
          />
          <input type="number" min="1" max="4" />
          <button type="submit">Create New Game</button>
        </form>
      </div>
    );
  }

  handleChange = e => {
    this.setState({ nameInput: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };
}

export default GameCreate;
