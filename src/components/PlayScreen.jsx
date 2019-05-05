import React, { Component } from "react";
import NewAnswer from "./NewAnswer";
import PrevAnswer from "./PrevAnswer";

class PlayScreen extends Component {
  state = {
    turnNum: 0,
    prevAnswerFrom: null
  };

  render() {
    const { turnNum, prevAnswerFrom } = this.state;
    return (
      <div>
        {prevAnswerFrom && <PrevAnswer />}
        <NewAnswer turnNum={turnNum} />
      </div>
    );
  }
}

export default PlayScreen;
