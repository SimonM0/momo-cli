const mkdirp = require('mkdirp');
const path = require('path');

const makeDirectories = directories => directories
  .forEach(
    directory => mkdirp.sync(
      path.resolve(
        process.cwd(),
        directory,
      ),
    ),
  );

module.exports = makeDirectories;
