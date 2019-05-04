import React from "react";
import StartScreen from "./StartScreen";

const StartUpWrapper = ({ gameToken, userPosition, children }) => {
  if (gameToken && userPosition) return children;
  else
    return (
      <div>
        <StartScreen />{" "}
      </div>
    );
};

export default StartUpWrapper;
