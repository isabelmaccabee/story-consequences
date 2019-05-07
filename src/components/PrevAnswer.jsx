import React, { Component } from "react";
import Canvas from "react-canvas-draw";
import firebase from "../firebase";
import * as api from "../api";

class PrevAnswer extends Component {
  state = {
    prevAnswer: null,
    currentThreadLength: 0
  };

  componentDidMount() {
    const { currentThread, gameToken } = this.props;
    const db = firebase.firestore();
    db.collection(gameToken)
      .doc(currentThread)
      .collection("thread")
      .onSnapshot(({ docs }) => {
        this.setState({ currentThreadLength: docs.length });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.currentThreadLength === this.props.turnNum - 1 &&
      this.state.currentThreadLength !== prevState.currentThreadLength
    ) {
      this.fetchPrevAnswer();
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="topHalf">
        <p>previous answer from thread {this.props.currentThread}</p>
        {this.props.turnNum % 2 !== 0 ? (
          <Canvas disabled saveData={localStorage.getItem("pastDrawing")} />
        ) : (
          <p>{this.state.prevAnswer}</p>
        )}
      </div>
    );
  }

  fetchPrevAnswer = () => {
    const { turnNum, currentThread, gameToken } = this.props;
    api.getPrevAnswer(turnNum, currentThread, gameToken).then(res => {
      const { input } = res.data();
      this.setState({ prevAnswer: input });
    });
  };
}

export default PrevAnswer;
