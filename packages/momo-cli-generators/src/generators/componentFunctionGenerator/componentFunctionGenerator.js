const inquirer = require('inquirer');
const get = require('lodash/get');
const COMPONENT_CHOICES = require('../../constants/COMPONENT_CHOICES');
const makeDirectories = require('../../helpers/makeDirectories');
const saveFiles = require('../../helpers/saveFiles');
const getTemplate = require('../../helpers/getTemplate');
const convertFunctionNameToType = require('../../helpers/convertFunctionNameToType');
const convertFunctionTypeName = require('../../helpers/convertFunctionTypeName');

const componentFunctionGenerator = (answers) => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'componentType',
      message: 'What type of component do you want to generate?',
      choices: COMPONENT_CHOICES,
    },
  ]).then((componentAnswers) => {
    const componentType = get(componentAnswers, 'componentType');

    try {
      const { extension = 'js' } = answers;
      const functionName = convertFunctionNameToType({
        functionName: answers.functionName,
        functionType: componentType,
      });
      const directories = [
        `./${functionName}/__tests__`,
      ];
      const camelCasedComponentType = convertFunctionTypeName(componentType);
      const files = [
        [
          `./${functionName}/${functionName}.${extension}`,
          getTemplate(
            functionName,
            componentType,
            camelCasedComponentType,
          ),
        ],
        [
          `./${functionName}/index.${extension}`,
          getTemplate(functionName, componentType, 'index'),
        ],
        [
          `./${functionName}/__tests__/${functionName}.test.${extension}`,
          getTemplate(functionName, componentType, 'test'),
        ],
      ];
      makeDirectories(directories);
      saveFiles(files);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
    console.log(answers, componentType);
  });
};

module.exports = componentFunctionGenerator;
