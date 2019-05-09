import React from "react";
import Canvas from "react-canvas-draw";
import "../css/SingleThread.css";

const SingleThread = props => {
  return (
    <div className="singleThread">
      <p>Started by: {props.threadId}</p>
      <ul>
        {props.fullThread.map((submission, index) => {
          return (
            <li key={index}>
              {index % 2 === 0 ? (
                <p>{submission.input}</p>
              ) : (
                <Canvas disabled saveData={submission.input} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SingleThread;
