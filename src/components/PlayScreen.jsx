import React, { Component } from "react";
import NewAnswer from "./NewAnswer";
import PrevAnswer from "./PrevAnswer";
import utils from "../utils";

class PlayScreen extends Component {
  state = {
    turnNum: 0,
    currentThread: null
  };

  // on mount (or ideally in waiting-area when all users have joined)
  // invoke utils.orderUserIds
  // to get alphabetically ordered users and currentUser's position in game

  render() {
    const { turnNum, currentThread } = this.state;
    console.log(this.state);
    return (
      <div className="main">
        {currentThread && (
          <PrevAnswer currentThread={currentThread} turnNum={turnNum} />
        )}
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
