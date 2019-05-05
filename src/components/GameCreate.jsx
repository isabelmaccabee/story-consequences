import React, { Component } from "react";

class GameCreate extends Component {
  state = {
    nameInput: "",
    numOfPlayers: 2
  };

  render() {
    const { nameInput } = this.state;
    // console.log(this.state);
    return (
      <div className="topHalf">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="nameInput">Name:</label>
          <input
            onChange={this.handleChange}
            value={nameInput}
            id="nameInput"
          />
          <label htmlFor="numOfPlayers">No. of players:</label>
          <input
            type="number"
            min="2"
            max="4"
            onChange={this.handleChange}
            id="numOfPlayers"
          />
          <button type="submit">Create New Game</button>
        </form>
      </div>
    );
  }

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // send request to db
    // get token back and set in App
    // sent to waiting area while waiting for other players to arrive
    const tempToken = "123456";
    const position = 1;
    const { numOfPlayers } = this.state;
    this.props.addGameConfigs(tempToken, numOfPlayers, position);
  };
}

export default GameCreate;
