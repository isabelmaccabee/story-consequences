import React, { Component } from "react";
import NewAnswer from "./NewAnswer";
import PrevAnswer from "./PrevAnswer";
import utils from "../utils";
import { navigate } from "@reach/router";

class PlayScreen extends Component {
  state = {
    turnNum: 1,
    currentThreadIndex: null
  };

  render() {
    const { turnNum, currentThreadIndex } = this.state;
    const { gameToken, allUsers, userId } = this.props;
    const currentThread = currentThreadIndex
      ? allUsers[currentThreadIndex - 1]
      : null;
    return (
      <div className="main">
        {currentThreadIndex && (
          <PrevAnswer
            currentThread={currentThread}
            turnNum={turnNum}
            gameToken={gameToken}
          />
        )}
        <NewAnswer
          turnNum={turnNum}
          advanceTurn={this.advanceTurn}
          userId={userId}
          gameToken={gameToken}
          currentThread={currentThread}
        />
      </div>
    );
  }

  advanceTurn = () => {
    const { numOfPlayers, userPosition } = this.props;
    if (this.state.turnNum === 5) {
      navigate("/game-end");
    } else {
      this.setState(prevState => {
        const nextThread = utils.findNextThread(
          prevState.currentThreadIndex,
          numOfPlayers,
          userPosition
        );
        return {
          turnNum: prevState.turnNum + 1,
          currentThreadIndex: nextThread
        };
      });
    }
  };
}

export default PlayScreen;
