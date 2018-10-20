const saveFileToPath = require('../saveFileToPath');

const saveFiles = files => files
  .forEach(([filePath, fileContents]) => {
    saveFileToPath(filePath, fileContents);
  });

module.exports = saveFiles;
