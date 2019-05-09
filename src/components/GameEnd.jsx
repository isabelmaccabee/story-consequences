import React, { Component } from "react";
import * as api from "../api";

class GameEnd extends Component {
  state = {
    threads: null
  };

  componentDidMount() {
    const { allUsers, gameToken } = this.props;
    console.log(gameToken);
    api.getAllThreads(allUsers, gameToken).then(response => {
      const firstObj = {
        [allUsers[0]]: []
      };
      response.forEach(doc => firstObj[allUsers[0]].push(doc.data()));
      console.log(firstObj);
    });
  }

  render() {
    const { threads } = this.state;
    return (
      <div>
        <p>end of game</p>
        {threads && <p>got stuff</p>}
      </div>
    );
  }
}

export default GameEnd;
