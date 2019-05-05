import React, { Component } from "react";
import NewAnswer from "./NewAnswer";
import PrevAnswer from "./PrevAnswer";
import utils from "../utils";

class PlayScreen extends Component {
  state = {
    turnNum: 0,
    currentThread: null
  };

  render() {
    const { turnNum, currentThread } = this.state;
    console.log(this.state);
    return (
      <div>
        {currentThread && <PrevAnswer currentThread={currentThread} />}
        <NewAnswer turnNum={turnNum} advanceTurn={this.advanceTurn} />
      </div>
    );
  }

  advanceTurn = () => {
    const { numOfPlayers, userPosition } = this.props;
    this.setState(prevState => {
      const nextThread = utils.findNextThread(
        prevState.currentThread,
        numOfPlayers,
        userPosition
      );
      return { turnNum: prevState.turnNum + 1, currentThread: nextThread };
    });
  };
}

export default PlayScreen;
