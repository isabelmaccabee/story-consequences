import React, { Component } from "react";
import firebase from "../firebase";

class WaitingArea extends Component {
  state = {
    numOfPlayers: 1
  };
  render() {
    const { numOfPlayers, leaveGame, gameToken, userId } = this.props;
    return (
      <div className="main">
        <p>hello welcome to the waiting area</p>
        <p>
          number of people in the room :{this.state.numOfPlayers}/{numOfPlayers}
        </p>
        <button onClick={() => leaveGame(gameToken, userId)}>leave game</button>
      </div>
    );
  }

  componentDidMount() {
    const db = firebase.firestore();
    db.collection(this.props.gameToken).onSnapshot(({ docs }) => {
      this.setState({ numOfPlayers: docs.length });
    });
  }
}

export default WaitingArea;
