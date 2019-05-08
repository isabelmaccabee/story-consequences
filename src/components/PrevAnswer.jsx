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
    this.listenToDatabase();
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
    if (prevProps.currentThread !== this.props.currentThread) {
      this.setState(
        prevState => ({
          isLoading: true,
          currentThreadLength: prevState.currentThreadLength - 1
        }),
        () => {
          this.listenToDatabase();
        }
      );
    }
  }

  render() {
    const { prevAnswer, isLoading } = this.state;
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
      this.setState({ prevAnswer: input, isLoading: false });
    });
  };

  listenToDatabase = () => {
    const { currentThread, gameToken } = this.props;
    const db = firebase.firestore();
    db.collection(gameToken)
      .doc(currentThread)
      .collection("thread")
      .onSnapshot(({ docs }) => {
        this.setState({ currentThreadLength: docs.length });
      });
  };
}

export default PrevAnswer;
