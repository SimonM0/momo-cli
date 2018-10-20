module.exports = {
  silent: true,
  testRegex: 'packages/.*.test.js',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  projects: [
    'packages/*',
  ],
};
