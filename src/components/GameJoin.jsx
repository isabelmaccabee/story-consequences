import React, { Component } from "react";

class GameJoin extends Component {
  state = {
    tokenInput: ""
  };
  render() {
    const { tokenInput } = this.state;
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="tokenInput" />
        <input
          id="tokenInput"
          onChange={this.handleChange}
          value={tokenInput}
          type="text"
        />
        <button type="submit">Join game</button>
      </form>
    );
  }

  handleChange = e => {
    this.setState({ tokenInput: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // makes request to check there is a game, and be assigned (or choose) 'position' number
    // update app state with token and position
  };
}

export default GameJoin;
