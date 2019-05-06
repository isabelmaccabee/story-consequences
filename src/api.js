import firebase from "./firebase";

export const createGame = async nameInput => {
  const timeStamp = Date.now();
  const token = `${Math.floor(timeStamp / 1000)}${nameInput
    .toUpperCase()
    .slice(0, 2)}`;
  const db = firebase.firestore();
  const addedUser = await db.collection(token).add({
    name: nameInput
  });
  return { addedUser, token };
};
