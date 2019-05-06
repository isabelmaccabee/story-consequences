const { expect } = require("chai");
const { findNextThread, orderUserIds } = require("../utils/index");

describe("findNewAnswerFrom", () => {
  it("returns position - 1 when prevThread is null (person before them)", () => {
    let prevThread = null;
    let numOfPlayers = 3;
    let userPosition = 2;
    expect(findNextThread(prevThread, numOfPlayers, userPosition)).to.equal(1);
    prevThread = null;
    numOfPlayers = 4;
    userPosition = 4;
    expect(findNextThread(prevThread, numOfPlayers, userPosition)).to.equal(3);
  });
  it("returns numOfPlayers when prevThread is null and their position is 1)", () => {
    let prevThread = null;
    let numOfPlayers = 3;
    let userPosition = 1;
    expect(findNextThread(prevThread, numOfPlayers, userPosition)).to.equal(3);
    prevThread = null;
    numOfPlayers = 4;
    userPosition = 1;
    expect(findNextThread(prevThread, numOfPlayers, userPosition)).to.equal(4);
  });
  it("returns correct num when prevThread provided and no looping (1 less than thread just had)", () => {
    let prevThread = 3;
    let numOfPlayers = 3;
    let userPosition = 1;
    expect(findNextThread(prevThread, numOfPlayers, userPosition)).to.equal(2);
    prevThread = 2;
    numOfPlayers = 4;
    userPosition = 3;
    expect(findNextThread(prevThread, numOfPlayers, userPosition)).to.equal(1);
  });
  it("returns numOfPlayers when prevThread was 1", () => {
    let prevThread = 1;
    let numOfPlayers = 3;
    let userPosition = 3;
    expect(findNextThread(prevThread, numOfPlayers, userPosition)).to.equal(3);
    prevThread = 1;
    numOfPlayers = 5;
    userPosition = 4;
    expect(findNextThread(prevThread, numOfPlayers, userPosition)).to.equal(5);
  });
});

describe("orderUserIds", () => {
  it("returns correct object when passed single itemed array with own id", () => {
    expect(orderUserIds(["testId"], "testId")).to.eql({
      orderedUsers: ["testId"],
      currentUserPosition: 1
    });
  });
  it("returns correct object when passed single itemed array without own id", () => {
    expect(orderUserIds(["no"], "amIinTheArray")).to.eql({
      orderedUsers: ["no"],
      currentUserPosition: null
    });
  });
  it("returns object with orderedUsers alphabetically when passed multiple itemed array (case)", () => {
    expect(orderUserIds(["bbb", "aaa", "ccc"], "ccc").orderedUsers).to.eql([
      "aaa",
      "bbb",
      "ccc"
    ]);
    expect(orderUserIds(["BBB", "AAA", "CCC"], "ccc").orderedUsers).to.eql([
      "AAA",
      "BBB",
      "CCC"
    ]);
    expect(
      orderUserIds(
        ["s5wACk42W2NJBT9BQ5u3", "g1YZWc7mlhIJDnW4nfki"],
        "g1YZWc7mlhIJDnW4nfki"
      ).orderedUsers
    ).to.eql(["g1YZWc7mlhIJDnW4nfki", "s5wACk42W2NJBT9BQ5u3"]);
  });
  it("returns correct object when passed single itemed array without own id", () => {
    expect(orderUserIds(["aaa", "bbb"], "bbb").currentUserPosition).to.equal(2);
  });
});
