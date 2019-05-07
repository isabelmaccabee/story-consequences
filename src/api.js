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
