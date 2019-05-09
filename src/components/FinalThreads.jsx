import React, { Component } from "react";
import * as api from "../api";
import SingleThread from "./SingleThread";

class FinalThreads extends Component {
  state = {
    threads: null
  };

  componentDidMount() {
    const { allUsers, gameToken } = this.props;
    Promise.all(
      allUsers.map(userId => api.getOneFullThread(userId, gameToken))
    ).then(responses => {
      this.addThreadsToState(responses);
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

  addThreadsToState = allResponses => {
    const threadsByUser = {};
    allResponses.forEach(response => {
      response.forEach(doc => {
        const threadId = doc.ref.parent.parent.id;
        const threadData = doc.data();
        if (threadsByUser[threadId]) threadsByUser[threadId].push(threadData);
        else threadsByUser[threadId] = [threadData];
      });
    });

    this.setState({ threads: threadsByUser });
  };
}

export default FinalThreads;
