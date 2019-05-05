const utils = {};

utils.findNextThread = (prevThread, numOfPlayers, userPosition) => {
  let nextThread = prevThread - 1;
  if (!prevThread) {
    nextThread = userPosition - 1;
  }
  if (nextThread < 1) return numOfPlayers;
  return nextThread;
};

module.exports = utils;
