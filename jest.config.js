module.exports = {
  collectCoverage: false,
  coverageReporters: ["json"],
  testPathIgnorePatterns: ["_[a-zA-Z0-9]+.txt$", "__fixtures__"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  testEnvironment: "node",
};
