module.exports = {
  silent: true,
  testRegex: 'packages/.*.test.js',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  setupFiles: [
    './jest/enzymeSetup.js',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
