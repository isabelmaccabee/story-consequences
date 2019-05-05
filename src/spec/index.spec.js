const { expect } = require("chai");
const utils = require("../utils");

describe("findNewAnswerFrom", () => {
  it("returns position - 1 when prevThread is null (person before them)", () => {
    let prevThread = null;
    let numOfPlayers = 3;
    let userPosition = 2;
    expect(
      utils.findNextThread(prevThread, numOfPlayers, userPosition)
    ).to.equal(1);
    prevThread = null;
    numOfPlayers = 4;
    userPosition = 4;
    expect(
      utils.findNextThread(prevThread, numOfPlayers, userPosition)
    ).to.equal(3);
  });
  it("returns numOfPlayers when prevThread is null and their position is 1)", () => {
    let prevThread = null;
    let numOfPlayers = 3;
    let userPosition = 1;
    expect(
      utils.findNextThread(prevThread, numOfPlayers, userPosition)
    ).to.equal(3);
    prevThread = null;
    numOfPlayers = 4;
    userPosition = 1;
    expect(
      utils.findNextThread(prevThread, numOfPlayers, userPosition)
    ).to.equal(4);
  });
  it("returns correct num when prevThread provided and no looping (1 less than thread just had)", () => {
    let prevThread = 3;
    let numOfPlayers = 3;
    let userPosition = 1;
    expect(
      utils.findNextThread(prevThread, numOfPlayers, userPosition)
    ).to.equal(2);
    prevThread = 2;
    numOfPlayers = 4;
    userPosition = 3;
    expect(
      utils.findNextThread(prevThread, numOfPlayers, userPosition)
    ).to.equal(1);
  });
  it("returns numOfPlayers when prevThread was 1", () => {
    let prevThread = 1;
    let numOfPlayers = 3;
    let userPosition = 3;
    expect(
      utils.findNextThread(prevThread, numOfPlayers, userPosition)
    ).to.equal(3);
    prevThread = 1;
    numOfPlayers = 5;
    userPosition = 4;
    expect(
      utils.findNextThread(prevThread, numOfPlayers, userPosition)
    ).to.equal(5);
  });
});
