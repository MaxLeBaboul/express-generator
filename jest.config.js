module.exports = {
  testEnvironment: "node",
  testRegex: ".*\\.spec\\.js$",
  restoreMocks: true,
  collectCoverageFrom: ["**/*.js"],
  coverageDirectory: "../coverage",

  moduleFileExtensions: ["js", "json", "node"],
  rootDir: "src",
};
