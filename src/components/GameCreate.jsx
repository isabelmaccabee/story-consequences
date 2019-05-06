import React, { Component } from "react";
import * as api from "../api";

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
    // send request to db:
    // - make collection with timestamp + name 'id'
    // - make new document representing this user (and auto-generate doc id)
    // get token back and set in App
    // sent to waiting area while waiting for other players to arrive

    const tempToken = "123456";
    const { nameInput, numOfPlayers } = this.state;
    api
      .createGame(nameInput)
      .then(ref => {
        console.log(ref.id);
      })
      .catch(err => {
        console.log("something went wrong 2", err);
      });
    this.props.addGameConfigs(tempToken, numOfPlayers, 1);
  };
}

export default GameCreate;
