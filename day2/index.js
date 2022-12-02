import fs from "fs/promises";

const scoreMapping = {
  X: 1, // Rock
  Y: 2, // Paper
  Z: 3, // Scissors
};

const winningMapping = {
  X: {
    A: 3, // Rock vs Rock
    B: 0, // Rock vs Paper
    C: 6, // Rock vs Scissors
  },
  Y: {
    A: 6, // Paper vs Rock
    B: 3, // Paper vs Paper
    C: 0, // Paper vs Scissors
  },
  Z: {
    A: 0, // Scissors vs Rock
    B: 6, // Scissors vs Paper
    C: 3, // Scissors vs Scissors
  },
};

export const getScoreForRound = (round) => {
  const [player1, player2] = round.split(" ");

  return winningMapping[player2][player1] + scoreMapping[player2];
};

export const getScoreForBattle = (array) => {
  return array.reduce((acc, round) => {
    return acc + getScoreForRound(round);
  }, 0);
};

const generatorMapping = {
  X: {
    // defeat
    A: "A Z",
    B: "B X",
    C: "C Y",
  },
  Y: {
    // null
    A: "A X",
    B: "B Y",
    C: "C Z",
  },
  Z: {
    // win
    A: "A Y",
    B: "B Z",
    C: "C X",
  },
};

export const generateRoundWhenCheating = (expected) => {
  const [player1, player2] = expected.split(" ");
  return generatorMapping[player2][player1];
};

export const getScoreForCheatingRound = (round) => {
  const roundtoScore = generateRoundWhenCheating(round);
  return getScoreForRound(roundtoScore);
};

export const getScoreForCheatingBattle = (array) => {
  return array.reduce((acc, round) => {
    return acc + getScoreForCheatingRound(round);
  }, 0);
};

export async function loadFile() {
  try {
    const data = await fs.readFile("day2/data.txt", { encoding: "utf8" });
    return data.split("\n");
  } catch (err) {
    console.log(err);
  }
}
