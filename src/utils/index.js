const utils = {};

utils.findNextThread = (prevThread, numOfPlayers) => {
  const newAnswerFrom = prevThread - 1;
  if (!prevThread || newAnswerFrom < 1) return numOfPlayers;
  return newAnswerFrom;
};

module.exports = utils;
