const inquirer = require('inquirer');
const get = require('lodash/get');
const colors = require('colors');
const { FUNCTION_TYPES, FUNCTION_CHOICES } = require('../../constants');
const { functionGenerator } = require('../../generators');

const createFunction = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'functionName',
      message: 'What is the name of your Function?\n',
    },
    {
      type: 'list',
      name: 'functionType',
      message: 'What is the type of function?\n',
      choices: FUNCTION_CHOICES,
    },
  ]).then((answers) => {
    if (!get(answers, 'functionName')) {
      throw new Error('\nERROR: No function name provided for the function');
    }

    switch (get(answers, 'functionType')) {
      case FUNCTION_TYPES.PLAIN_FUNCTION:
        return functionGenerator(answers);
      default:
        return functionGenerator(answers);
    }
  }).catch((error) => {
    console.error(colors.red(error.message));
    process.exit(1);
  });
};

module.exports = createFunction;
