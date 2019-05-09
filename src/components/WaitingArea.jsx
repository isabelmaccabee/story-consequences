import React, { Component } from "react";
import firebase from "../firebase";
import * as api from "../api.js";

class WaitingArea extends Component {
  state = {
    currentNumOfPlayers: 1,
    isReady: false,
    players: []
  };
  render() {
    const { numOfPlayers, leaveGame, gameToken, userId } = this.props;
    const { players } = this.state;
    return (
      <div className="main">
        {gameToken && <h2>{gameToken}</h2>}
        <p>hello welcome to the waiting area</p>
        <p>
          number of people in the room :{this.state.currentNumOfPlayers}/
          {numOfPlayers}
        </p>
        <ul>
          {players.map((player) => {
            const readyIndicator = player.isReady ? "✅" : "❌";
            return <li>{`${player.name} ${readyIndicator}`}</li>;
          })}
          <li />
        </ul>
        <button onClick={() => leaveGame(gameToken, userId)}>leave game</button>
        <button onClick={this.setReadiness}>ready</button>
      </div>
    );
  }

  componentDidMount() {
    const db = firebase.firestore();
    db.collection(this.props.gameToken).onSnapshot(({ docs }) => {
      const updatedPlayers = docs
        .map((doc) => {
          const { name, isReady } = doc.data();
          return { name, isReady };
        })
        .filter((obj) => !Object.values(obj).includes(undefined));
      this.setState((prevState) => {
        return {
          ...prevState,
          currentNumOfPlayers: docs.length - 1,
          players: updatedPlayers
        };
      });
    });
  }
  componentDidUpdate() {
    const { currentNumOfPlayers, isReady } = this.state;
    const { numOfPlayers, gameToken, addUsersList } = this.props;
    if (isReady && currentNumOfPlayers === +numOfPlayers) {
      api
        .getReadyPlayers(gameToken)
        .then((res) => {
          if (res.docs.length === +numOfPlayers) {
            const idsOnly = res.docs.map((doc) => doc.id);
            addUsersList(idsOnly);
          }
        })
        .catch((err) => {
          console.log("somehting went wrong", err);
        });
    }
  }
  //probs need a componentDidUnmount

  setReadiness = () => {
    const { gameToken, userId } = this.props;
    const { isReady } = this.state;
    api.updateReadiness(gameToken, userId, !isReady);
    this.setState((prevState) => {
      return { ...prevState, isReady: !prevState.isReady };
    });
  };
}

// to go into ../api.js
// const updateReadiness = async (token, userId, isReady) => {
//   const db = firebase.firestore();
//   return await db
//     .collection(token)
//     .doc(userId)
//     .update({ isReady: isReady });
// };

// const getReadyPlayers = async token => {
//   const db = firebase.firestore();
//   const players = db.collection(token);
//   return await players.where("isReady", "==", true).get();
// };

export default WaitingArea;
