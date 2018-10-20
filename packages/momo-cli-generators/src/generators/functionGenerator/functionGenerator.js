const makeDirectories = require('../../helpers/makeDirectories');
const saveFiles = require('../../helpers/saveFiles');
const getTemplate = require('../../helpers/getTemplate');
const convertFunctionTypeName = require(
  '../../helpers/convertFunctionTypeName',
);

const functionGenerator = (answers) => {
  try {
    const { functionName, functionType, extension = 'js' } = answers;
    const directories = [
      `./${functionName}/__tests__`,
    ];
    const files = [
      [
        `./${functionName}/${functionName}.${extension}`,
        getTemplate(
          functionName,
          functionType,
          convertFunctionTypeName(functionType),
        ),
      ],
      [
        `./${functionName}/index.${extension}`,
        getTemplate(functionName, functionType, 'index'),
      ],
      [
        `./${functionName}/__tests__/${functionName}.test.${extension}`,
        getTemplate(functionName, functionType, 'test'),
      ],
    ];
    makeDirectories(directories);
    saveFiles(files);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = functionGenerator;
