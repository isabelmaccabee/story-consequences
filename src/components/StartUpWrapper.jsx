import React from "react";

const StartUpWrapper = ({ gameToken, playerNum, children }) => {
  if (gameToken && playerNum) return children;
  else
    return (
      <div>
        <p>Need token and playerNum</p>
      </div>
    );
};

export default StartUpWrapper;
