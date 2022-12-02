const {
  countElfCalories,
  getMaxFromMap,
  getElfWithMostCalories,
} = require(".");

describe("advent of code - Day 1", () => {
  it("should count calories for 1 elfs", () => {
    const result = countElfCalories([100, 200]);

    expect(result).toEqual({ 1: 300 });
  });

  it("should count calories for 2 elfs", () => {
    const result = countElfCalories([100, 400, "", 300]);

    expect(result).toEqual({ 1: 500, 2: 300 });
  });

  it("should get max from map", () => {
    const result = getMaxFromMap({ 1: 500, 2: 300 });

    expect(result).toEqual(1);
  });

  it("should get Elf with most calories", () => {
    const result = getElfWithMostCalories([100, 400, "", 300]);

    expect(result).toEqual(1);
  });
});
