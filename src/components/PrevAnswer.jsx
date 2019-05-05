import React, { Component } from "react";
import Canvas from "react-canvas-draw";

class PrevAnswer extends Component {
  render() {
    return (
      <div className="topHalf">
        <p>previous answer from thread {this.props.currentThread}</p>
        {this.props.turnNum % 2 === 0 ? (
          <Canvas disabled saveData={localStorage.getItem("pastDrawing")} />
        ) : (
          <p>Text here text here</p>
        )}
      </div>
    );
  }
}

export default PrevAnswer;
