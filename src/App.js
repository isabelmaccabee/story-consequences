import React, { Component } from "react";
import { Router, navigate } from "@reach/router";
import "./css/App.css";
import StartUpWrapper from "./components/StartUpWrapper";
import WaitingArea from "./components/WaitingArea";
import PlayScreen from "./components/PlayScreen";
import Header from "./components/Header";
import * as api from "./api";
import * as utils from "./utils/index";
import GameEnd from "./components/GameEnd";

class App extends Component {
  state = {
    gameToken: null,
    numOfPlayers: null,
    userPosition: null,
    userId: null,
    allUsers: []
  };

  render() {
    const {
      gameToken,
      userPosition,
      numOfPlayers,
      userId,
      allUsers
    } = this.state;
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
              <WaitingArea
                path="/waiting-area"
                numOfPlayers={numOfPlayers}
                gameToken={gameToken}
                leaveGame={this.leaveGame}
                userId={userId}
                addUsersList={this.addUsersList}
              />
              <PlayScreen
                path="/game-play"
                numOfPlayers={numOfPlayers}
                userPosition={userPosition}
                gameToken={gameToken}
                allUsers={allUsers}
                userId={userId}
              />
              <GameEnd
                path="/game-end"
                gameToken={gameToken}
                allUsers={allUsers}
              />
            </Router>
          </div>
        </StartUpWrapper>
      </div>
    );
  }

  addUsersList = idArray => {
    const { orderedUsers, currentUserPosition } = utils.orderUserIds(
      idArray,
      this.state.userId
    );
    this.setState(
      {
        allUsers: orderedUsers,
        userPosition: currentUserPosition
      },
      () => {
        navigate("./game-play");
      }
    );
  };

  addGameConfigs = (gameToken, numOfPlayers, userId) => {
    this.setState({ gameToken, numOfPlayers, userId }, () => {
      navigate("/waiting-area");
    });
  };

  // NEW STUFF

  leaveGame = (gameToken, userId) => {
    api
      .removePlayer(gameToken, userId)
      .then(() => {
        this.setState({
          gameToken: null,
          numOfPlayers: null,
          userPosition: 1,
          userId: null
        });
      })
      .then(() => {
        navigate("./");
      });
  };
}

export default App;
