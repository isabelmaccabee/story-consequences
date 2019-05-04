import React, { Component } from "react";
import { Router } from "@reach/router";
import StartUpWrapper from "./components/StartUpWrapper";
import WaitingArea from "./components/WaitingArea";

class App extends Component {
  state = {
    gameToken: "iExist"
    // playerNum: "iExistToo"
  };

  render() {
    const { gameToken, playerNum } = this.state;
    return (
      <div>
        <StartUpWrapper gameToken={gameToken} playerNum={playerNum}>
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
}

export default App;
