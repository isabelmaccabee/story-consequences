import firebase from "./firebase";
const db = firebase.firestore();

export const createGame = async (nameInput, numOfPlayers) => {
  const timeStamp = Date.now();
  const token = `${Math.floor(timeStamp / 1000)}${nameInput
    .toUpperCase()
    .slice(0, 2)}`;
  return Promise.all([
    joinGame(token, nameInput),
    token,
    makeGameInfoDoc(token, numOfPlayers)
  ]);
};

export const makeGameInfoDoc = async (tokenInput, numOfPlayers) => {
  return await db
    .collection(tokenInput)
    .doc("gameInfo")
    .set({
      numOfPlayers
    });
};

export const checkGameExists = async tokenInput => {
  return await db.collection(tokenInput).get();
};

export const joinGame = async (tokenInput, nameInput) => {
  return await db.collection(tokenInput).add({
    name: nameInput
  });
};

export const getGameInfo = async tokenInput => {
  const info = await db
    .collection(tokenInput)
    .doc("gameInfo")
    .get();
  return info.data();
};

export const removePlayer = async (token, userId) => {
  const db = firebase.firestore();

  return await db
    .collection(token)
    .doc(userId)
    .delete();
};

export const updateReadiness = async (token, userId, isReady) => {
  const db = firebase.firestore();
  return await db
    .collection(token)
    .doc(userId)
    .update({ isReady: isReady });
};

export const getReadyPlayers = async token => {
  const db = firebase.firestore();
  const players = db.collection(token);
  return await players.where("isReady", "==", true).get();
};
