import React, { Component } from "react";
import * as api from "../api";
import SingleThread from "./SingleThread";

class GameEnd extends Component {
  state = {
    threads: null
  };

  componentDidMount() {
    const { allUsers, gameToken } = this.props;
    Promise.all(
      allUsers.map(userId => api.getOneFullThread(userId, gameToken))
    ).then(([response]) => {
      const threadsByUser = {
        [allUsers[0]]: []
      };
      response.forEach(doc => threadsByUser[allUsers[0]].push(doc.data()));
      this.setState({ threads: threadsByUser });
    });
  }

  render() {
    const { threads } = this.state;
    return (
      <div>
        <p>end of game</p>
        {threads && (
          <div>
            {Object.keys(threads).map(threadId => {
              return (
                <SingleThread
                  key={threadId}
                  threadId={threadId}
                  fullThread={threads[threadId]}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default GameEnd;
