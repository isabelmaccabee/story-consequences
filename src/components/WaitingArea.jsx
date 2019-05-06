import React, { Component } from "react";
import * as api from "../api.js";

// to go in api.js
import firebase from "../firebase";

class WaitingArea extends Component {
  state = {
    numOfPlayers: 1
  };
  render() {
    const { numOfPlayers } = this.props;
    return (
      <div className="main">
        <p>hello welcome to the waiting area</p>

        <p>
          number of people in the room :{this.state.numOfPlayers}/{numOfPlayers}
        </p>
      </div>
    );
  }

  componentDidMount() {
    checkNumOfPlayers(this.props.gameToken).then(({ docs }) => {
      this.setState({ numOfPlayers: docs.length });
    });
  }
}

export default WaitingArea;
const db = firebase.firestore();

const checkNumOfPlayers = async (token) => {
  return await db.collection(token).get();
};
