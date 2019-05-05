import React, { Component } from "react";
import { Router } from "@reach/router";
import StartUpWrapper from "./components/StartUpWrapper";
import WaitingArea from "./components/WaitingArea";

class App extends Component {
  state = {
    gameToken: "iExist",
    numOfPlayers: null
    // userPosition: "iExistToo"
  };

  render() {
    const { gameToken, userPosition } = this.state;
    console.log(this.state);
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
            </Router>
          </div>
        </StartUpWrapper>
      </div>
    );
  }

  addGameConfigs = (gameToken, numOfPlayers, userPosition) => {
    this.setState({ gameToken, numOfPlayers, userPosition });
  };
}

export default App;
