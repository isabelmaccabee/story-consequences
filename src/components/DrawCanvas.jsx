import React, { Component } from "react";
import Canvas from "react-canvas-draw";

class DrawCanvas extends Component {
  render() {
    return (
      <div onMouseUp={this.handleMouseUp}>
        <Canvas ref={cD => (this.saveableCanvas = cD)} />
      </div>
    );
  }
  handleMouseUp = e => {
    const drawData = this.saveableCanvas.getSaveData();
    this.props.updateDrawInput(drawData);
  };
}

export default DrawCanvas;
