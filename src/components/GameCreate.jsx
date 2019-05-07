import React, { Component } from "react";
import * as api from "../api";

class GameCreate extends Component {
  state = {
    nameInput: "",
    numOfPlayers: 2
  };

  render() {
    const { nameInput } = this.state;
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
    // sends request to db:
    // - makes collection with timestamp + name 'id'
    // - makes new document representing this user (and auto-generate doc id)
    // get doc id (representing this user) back and set in App
    // sent to waiting area while waiting for other players to arrive - TO DO

    const { nameInput, numOfPlayers } = this.state;
    api
      .createGame(nameInput, numOfPlayers)
      .then(([addedUser, token, gameInfoDoc]) => {
        this.props.addGameConfigs(token, numOfPlayers, addedUser.id);
      })
      .catch(err => {
        console.log("something went wrong 2", err);
      });
  };
}

export default GameCreate;
