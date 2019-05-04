import React from "react";
import StartScreen from "./StartScreen";

const StartUpWrapper = ({ gameToken, playerNum, children }) => {
  if (gameToken && playerNum) return children;
  else
    return (
      <div>
        <StartScreen />{" "}
      </div>
    );
};

export default StartUpWrapper;
