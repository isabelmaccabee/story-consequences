import React, { Component } from "react";
import Canvas from "react-canvas-draw";
import BrushOptions from "./BrushOptions";

class DrawCanvas extends Component {
  state = {
    brushRadius: "5",
    brushColour: "#000000"
  };

  render() {
    const { brushRadius, brushColour } = this.state;
    console.log(brushColour, brushRadius);
    return (
      <>
        <BrushOptions updateBrushOptions={this.updateBrushOptions} />
        <div onMouseUp={this.handleMouseUp}>
          <Canvas
            ref={cD => (this.saveableCanvas = cD)}
            brushRadius={+brushRadius}
            lazyRadius={2}
            brushColor={brushColour}
          />
        </div>
      </>
    );
  }

  handleMouseUp = e => {
    const drawData = this.saveableCanvas.getSaveData();
    this.props.updateDrawInput(drawData);
  };

  updateBrushOptions = (id, value) => {
    this.setState({ [id]: value });
  };
}

export default DrawCanvas;
