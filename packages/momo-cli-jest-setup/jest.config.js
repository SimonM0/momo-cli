module.exports = {
  silent: true,
  rootDir: './',
  testRegex: '.*.test.js',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  testURL: 'http://localhost/',
  setupFiles: [
    'momo-cli-jest-setup/src/enzymeSetup.js',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
