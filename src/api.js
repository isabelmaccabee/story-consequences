import firebase from "./firebase";
const db = firebase.firestore();

export const createGame = async nameInput => {
  const timeStamp = Date.now();
  const token = `${Math.floor(timeStamp / 1000)}${nameInput
    .toUpperCase()
    .slice(0, 2)}`;
  const addedUser = await db.collection(token).add({
    name: nameInput
  });
  return { addedUser, token };
};

export const checkGameExists = async tokenInput => {
  return await db.collection(tokenInput).get();
};

export const joinGame = async (tokenInput, nameInput) => {
  return await db.collection(tokenInput).add({
    name: nameInput
  });
};
