module.exports = {
  "verbose": true,
  "bail": true,     // To stop Jest running tests after the first failure
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",  // Can be used while writting script
  "testPathIgnorePatterns": ["<rootDir>/build/", "<rootDir>/node_modules/"],  // <rootDir> gets replaced with the path to the folder that contains config file.
  "collectCoverageFrom": [
    "**/*.{js|jsx}"
  ],
  "coveragePathIgnorePatterns": ["<rootDir>/build/", "<rootDir>/node_modules/"]
};