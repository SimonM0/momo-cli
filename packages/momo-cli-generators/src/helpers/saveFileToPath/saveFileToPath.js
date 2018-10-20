const fs = require('fs');
const path = require('path');

const saveFileToPath = (pathName, template) => {
  const fullPath = path.resolve(
    process.cwd(),
    pathName,
  );

  fs.writeFile(
    fullPath,
    template,
    (err) => {
      if (err) {
        console.error(err);
      }

      console.log(`File saved: ${fullPath}`);
    },
  );
};

module.exports = saveFileToPath;
