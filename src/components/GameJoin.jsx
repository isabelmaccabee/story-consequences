import React, { Component } from "react";

class GameJoin extends Component {
  state = {
    tokenInput: ""
  };
  render() {
    const { tokenInput } = this.state;
    console.log(this.state);
    return (
      <div className="bottomHalf">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="tokenInput">Insert token here:</label>
          <input
            id="tokenInput"
            onChange={this.handleChange}
            value={tokenInput}
            type="text"
          />
          <button type="submit">Join game</button>
        </form>
      </div>
    );
  }

  handleChange = e => {
    this.setState({ tokenInput: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // makes request to check there is a game, and be assigned (or choose) 'position' number
    // update app state with token and position
    if (this.state.tokenInput === "123456") {
      const tempToken = this.state.tokenInput;
      const playerCount = 4;
      const position = 3;
      this.props.addGameConfigs(tempToken, playerCount, position);
    } else {
      console.log("wrong token");
    }
  };
}

export default GameJoin;
