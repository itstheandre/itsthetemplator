module.exports = {
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testEnvironment: "node",
  testRegex: "./tests/.*\\.(test|spec)?\\.(ts|js)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  roots: ["<rootDir>/tests"],
  collectCoverageFrom: ["!dist/**/index.js"],
};

// ./tests/.**/*\\.(test|spec)?\\.(js)$\
