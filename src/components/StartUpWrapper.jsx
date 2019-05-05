import React from "react";
import GameCreate from "./GameCreate";
import GameJoin from "./GameJoin";

const StartUpWrapper = ({
  gameToken,
  userPosition,
  children,
  addGameConfigs
}) => {
  if (gameToken && userPosition) return children;
  else
    return (
      <div>
        {" "}
        <p>Need stuff</p>
        <GameCreate addGameConfigs={addGameConfigs} />
        <GameJoin addGameConfigs={addGameConfigs} />
      </div>
    );
};

export default StartUpWrapper;
