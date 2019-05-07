import React, { Component } from "react";
import * as api from "../api";

class GameJoin extends Component {
  state = {
    tokenInput: "",
    nameInput: ""
  };
  render() {
    const { tokenInput, nameInput } = this.state;
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
          <label htmlFor="nameInput">Name:</label>
          <input
            id="nameInput"
            onChange={this.handleChange}
            value={nameInput}
            type="text"
          />
          <button type="submit">Join game</button>
        </form>
      </div>
    );
  }

  handleChange = e => {
    const { value, id } = e.target;
    this.setState({ [id]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // makes request to check there is a game, and be assigned (or choose) 'position' number
    // update app state with token and position
    const { tokenInput, nameInput } = this.state;
    api
      .checkGameExists(tokenInput)
      .then(response => {
        if (!response.empty) {
          return Promise.all([
            api.joinGame(tokenInput, nameInput),
            api.getGameInfo(tokenInput)
          ]);
        } else {
          return Promise.reject({ msg: "game didn't exist" });
        }
      })
      .then(([addedUser, gameInfo]) => {
        console.log(gameInfo.numOfPlayers);
        this.props.addGameConfigs(
          tokenInput,
          +gameInfo.numOfPlayers,
          addedUser.id
        );
      })
      .catch(err => {
        console.log("err", err.msg);
      });
  };
}

export default GameJoin;
