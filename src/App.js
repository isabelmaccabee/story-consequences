import React, { Component } from "react";
import StartUpWrapper from "./components/StartUpWrapper";

class App extends Component {
  state = {
    gameToken: "iExist",
    playerNum: "iExistToo"
  };
  render() {
    const { gameToken, playerNum } = this.state;
    return (
      <div>
        <StartUpWrapper gameToken={gameToken} playerNum={playerNum}>
          <div className="App">
            <h1>Welcome to Story Consequences</h1>
          </div>
        </StartUpWrapper>
      </div>
    );
  }
}

export default App;
