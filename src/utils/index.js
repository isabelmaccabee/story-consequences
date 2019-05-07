const utils = {};

utils.findNextThread = (prevThread, numOfPlayers, userPosition) => {
  let nextThread = prevThread - 1;
  if (!prevThread) {
    nextThread = userPosition - 1;
  }
  if (nextThread < 1) return numOfPlayers;
  return nextThread;
};

utils.orderUserIds = (usersArr, currentUserId) => {
  const baseObj = { orderedUsers: [], currentUserPosition: null };

  const sortedUsers = usersArr.sort();
  baseObj.orderedUsers.push(...sortedUsers);

  const index = sortedUsers.findIndex(id => id === currentUserId);
  baseObj.currentUserPosition = index === -1 ? null : index + 1;
  return baseObj;
};
module.exports = utils;
