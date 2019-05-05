const { expect } = require("chai");
const utils = require("../utils");

describe("findNewAnswerFrom", () => {
  it("returns numOfPlayers when prevThread is null", () => {
    expect(utils.findNextThread(null, 3)).to.equal(3);
    expect(utils.findNextThread(null, 5)).to.equal(5);
  });
  it("returns correct num when prevThread provided and no looping", () => {
    expect(utils.findNextThread(3, 3)).to.equal(2);
    expect(utils.findNextThread(2, 4)).to.equal(1);
  });
  it("returns correct num when prevThread provided and looping", () => {
    expect(utils.findNextThread(1, 3)).to.equal(3);
    expect(utils.findNextThread(1, 5)).to.equal(5);
  });
});
