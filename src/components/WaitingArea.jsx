import React, { Component } from "react";
import firebase from "../firebase";
import { navigate } from "@reach/router";

class WaitingArea extends Component {
  state = {
    currentNumOfPlayers: 1
  };
  render() {
    const { numOfPlayers, leaveGame, gameToken, userId } = this.props;
    return (
      <div className="main">
        <p>hello welcome to the waiting area</p>
        <p>
          number of people in the room :{this.state.currentNumOfPlayers}/
          {numOfPlayers}
        </p>
        <button onClick={() => leaveGame(gameToken, userId)}>leave game</button>
        <button>ready</button>
      </div>
    );
  }

  componentDidMount() {
    const db = firebase.firestore();
    db.collection(this.props.gameToken).onSnapshot(({ docs }) => {
      console.log(docs);
      this.setState({ currentNumOfPlayers: docs.length });
    });
  }
  componentDidUpdate() {
    const { currentNumOfPlayers } = this.state;
    const { numOfPlayers } = this.props;
    if (currentNumOfPlayers === numOfPlayers) {
      navigate("./game-play");
    }
  }
}

export default WaitingArea;
