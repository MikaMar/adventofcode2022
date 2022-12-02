import {
  getScoreForRound,
  loadFile,
  getScoreForBattle,
  generateRoundWhenCheating,
  getScoreForCheatingRound,
  getScoreForCheatingBattle,
} from "./";

describe("day2 challenge", () => {
  it("Should return score for A vs Y", () => {
    expect(getScoreForRound("A Y")).toBe(8);
  });

  it("Should return score for B vs X", () => {
    expect(getScoreForRound("B X")).toBe(1);
  });

  it("Should return score for C vs Z", () => {
    expect(getScoreForRound("C Z")).toBe(6);
  });

  it("shoul return a score for a battle", () => {
    const battle = ["A Y", "B X", "C Z"];
    expect(getScoreForBattle(battle)).toBe(15);
  });

  it("shoul return a score for a global battle", async () => {
    const array = await loadFile();
    expect(getScoreForBattle(array)).toBe(13052);
  });

  it("shoul return correct expected round when Y is nul match", async () => {
    expect(generateRoundWhenCheating("A Y")).toBe("A X");
  });

  it("shoul return correct expected round when B is a defeat", async () => {
    expect(generateRoundWhenCheating("B X")).toBe("B X");
  });

  it("shoul return correct expected round when C is a win", async () => {
    expect(generateRoundWhenCheating("C Z")).toBe("C X");
  });

  it("shoul return correct score when Y is nul match", async () => {
    expect(getScoreForCheatingRound("A Y")).toBe(4);
  });

  it("shoul return correct score when B is a defeat", async () => {
    expect(getScoreForCheatingRound("B X")).toBe(1);
  });

  it("shoul return correct score when C is a win", async () => {
    expect(getScoreForCheatingRound("C Z")).toBe(7);
  });

  it("shoul return a score for a battle", () => {
    const battle = ["A Y", "B X", "C Z"];
    expect(getScoreForCheatingBattle(battle)).toBe(12);
  });

  it("shoul return a score for a global battle", async () => {
    const array = await loadFile();
    expect(getScoreForCheatingBattle(array)).toBe(13693);
  });
});
