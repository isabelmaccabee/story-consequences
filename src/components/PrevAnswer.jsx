import React, { Component } from "react";

class PrevAnswer extends Component {
  render() {
    return <p>previous answer from thread {this.props.currentThread}</p>;
  }
}

export default PrevAnswer;
