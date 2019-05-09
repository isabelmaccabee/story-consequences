import React, { Component } from "react";
import firebase from "../firebase";
import * as api from "../api";
import FinalThreads from "./FinalThreads";

class GameEnd extends Component {
  state = {
    finishedCount: 0
  };

  componentDidMount() {
    const { gameToken, userId } = this.props;
    api.updateFinishedness(gameToken, userId).then(() => {
      this.listenForFinished();
    });
  }

  componentDidUpdate() {
    console.log(this.state.finishedCount, this.props.numOfPlayers);
  }

  render() {
    const { numOfPlayers, gameToken, allUsers } = this.props;
    const { finishedCount } = this.state;
    return finishedCount === numOfPlayers ? (
      <FinalThreads gameToken={gameToken} allUsers={allUsers} />
    ) : (
      <p>Just waiting for others to finish!</p>
    );
  }

  listenForFinished = () => {
    const db = firebase.firestore();
    db.collection(this.props.gameToken).onSnapshot(({ docs }) => {
      const updatedPlayers = docs
        .map(doc => {
          const { name, isFinished } = doc.data();
          return { name, isFinished };
        })
        .filter(obj => !Object.values(obj).includes(undefined));
      this.setState(prevState => {
        return {
          finishedCount: updatedPlayers.length
        };
      });
    });
  };
}

export default GameEnd;
