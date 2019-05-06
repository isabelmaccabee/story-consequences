import React, { Component } from "react";

class WaitingArea extends Component {
  render() {
    const { numOfPlayers } = this.props;
    return (
      <div className="main">
        <p>hello welcome to the waiting area</p>

        <p>
          number of people in the room :{1}/{numOfPlayers}
        </p>
      </div>
    );
  }

  componentDidMount() {
    console.log("mounted");
  }
}

export default WaitingArea;
