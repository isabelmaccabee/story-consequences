import React, { Component } from "react";
import { Router, navigate } from "@reach/router";
import "./css/App.css";
import StartUpWrapper from "./components/StartUpWrapper";
import WaitingArea from "./components/WaitingArea";
import PlayScreen from "./components/PlayScreen";
import Header from "./components/Header";

class App extends Component {
  state = {
    gameToken: null,
    numOfPlayers: null,
    userPosition: 1,
    userId: null
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
            <Header />
            <Router>
              <WaitingArea path="/waiting-area" />
              <PlayScreen
                path="/game-play"
                numOfPlayers={numOfPlayers}
                userPosition={userPosition}
              />
            </Router>
          </div>
        </StartUpWrapper>
      </div>
    );
  }

  addGameConfigs = (gameToken, numOfPlayers, userId) => {
    this.setState({ gameToken, numOfPlayers, userId }, () => {
      navigate("/game-play");
    });
  };
}

export default App;
