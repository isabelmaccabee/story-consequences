import React, { Component } from "react";
import Canvas from "react-canvas-draw";
import firebase from "../firebase";
import * as api from "../api";

class PrevAnswer extends Component {
  state = {
    prevAnswer: null,
    currentThreadLength: 0,
    isLoading: true
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
      this.setState({ isLoading: true }, () => {
        this.fetchPrevAnswer();
      });
    }
  }

  render() {
    const { prevAnswer, isLoading } = this.state;
    console.log(prevAnswer);
    return (
      <div className="topHalf">
        {!isLoading && (
          <div>
            <p>previous answer from thread {this.props.currentThread}</p>
            {this.props.turnNum % 2 !== 0 ? (
              <Canvas disabled saveData={prevAnswer} />
            ) : (
              <p>{prevAnswer}</p>
            )}
          </div>
        )}
      </div>
    );
  }

  fetchPrevAnswer = () => {
    const { turnNum, currentThread, gameToken } = this.props;
    api.getPrevAnswer(turnNum, currentThread, gameToken).then(res => {
      const { input } = res.data();
      console.log(input);
      this.setState({ prevAnswer: input, isLoading: false });
    });
  };
}

export default PrevAnswer;
