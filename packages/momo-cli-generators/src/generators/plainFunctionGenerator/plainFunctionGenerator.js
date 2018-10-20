const makeDirectories = require('../../helpers/makeDirectories');
const saveFiles = require('../../helpers/saveFiles');
const getIndexTemplate = require('../../helpers/getIndexTemplate');

const plainFunctionGenerator = (answers) => {
  const { functionName, functionType, extension = 'js' } = answers;
  const directories = [
    `./${functionName}/__tests__`,
  ];
  const files = [
    [
      `./${functionName}/${functionName}.${extension}`,
      getIndexTemplate(functionName, functionType),
    ],
    [
      `./${functionName}/index.${extension}`,
      getIndexTemplate(functionName, functionType),
    ],
    [
      `./${functionName}/__tests__/${functionName}.test.${extension}`,
      getIndexTemplate(functionName, functionType),
    ],
  ];
  makeDirectories(directories);
  saveFiles(files);
};

module.exports = plainFunctionGenerator;
