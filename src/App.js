import React, { Component } from "react";
import { Router, navigate } from "@reach/router";
import StartUpWrapper from "./components/StartUpWrapper";
import WaitingArea from "./components/WaitingArea";
import PlayScreen from "./components/PlayScreen";

class App extends Component {
  state = {
    gameToken: "iExist",
    // numOfPlayers: null,
    numOfPlayers: 3,
    // userPosition: "iExistToo"
    userPosition: 1
  };

  render() {
    const { gameToken, userPosition, numOfPlayers } = this.state;
    return (
      <div>
        <StartUpWrapper
          gameToken={gameToken}
          userPosition={userPosition}
          addGameConfigs={this.addGameConfigs}
        >
          <div className="App">
            <h1>Story Consequences</h1>
            <Router>
              <WaitingArea path="/waiting-area" />
              <PlayScreen
                path="/game-play"
                userPosition={userPosition}
                numOfPlayers={numOfPlayers}
              />
            </Router>
          </div>
        </StartUpWrapper>
      </div>
    );
  }

  addGameConfigs = (gameToken, numOfPlayers, userPosition) => {
    this.setState({ gameToken, numOfPlayers, userPosition }, () => {
      navigate("/game-play");
    });
  };
}

export default App;
