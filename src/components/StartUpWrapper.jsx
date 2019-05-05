import React from "react";
import "../css/StartUpWrapper.css";
import GameCreate from "./GameCreate";
import GameJoin from "./GameJoin";
import Header from "./Header";

const StartUpWrapper = ({
  gameToken,
  userPosition,
  children,
  addGameConfigs
}) => {
  if (gameToken && userPosition) return children;
  else
    return (
      <div id="startPage">
        <Header />
        <GameCreate addGameConfigs={addGameConfigs} />
        <GameJoin addGameConfigs={addGameConfigs} />
      </div>
    );
};

export default StartUpWrapper;
