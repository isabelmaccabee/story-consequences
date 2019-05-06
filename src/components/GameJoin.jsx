import React, { Component } from "react";
import * as api from "../api";

class GameJoin extends Component {
  state = {
    tokenInput: "",
    nameInput: "userHere"
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
    const { tokenInput, nameInput } = this.state;
    api
      .checkGameExists(tokenInput)
      .then(response => {
        if (!response.empty) {
          return api.joinGame(tokenInput, nameInput);
        } else {
          return Promise.reject({ msg: "game didn't exist" });
        }
      })
      .then(addedUser => {
        this.props.addGameConfigs(tokenInput, 4, addedUser.id);
      })
      .catch(err => {
        console.log("err", err.msg);
      });
  };
}

export default GameJoin;
