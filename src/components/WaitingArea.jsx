import React, { Component } from "react";

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

        <button>leave game</button>
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

// componentDidMount() {
//   const db = firebase.firestore();
//   db.collection("test")
//     .doc("x0NWpoBh0lt71ZgqqdZF")
//     .onSnapshot((doc) => {
//       const canvas = doc.data().drawing;
//       const text = doc.data().text;
//       console.log(doc.data());
//       this.setState((prevState) => {
//         return { ...prevState, canvas, write: !prevState.write, text };
//       });
//     });
// }

export default WaitingArea;
