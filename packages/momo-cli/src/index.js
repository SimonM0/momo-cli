#!/usr/bin/env node
const inquirer = require('inquirer');
const { FUNCTION_CHOICES } = require('momo-cli-generators');
const Package = require('../package.json');
const colors = require('./themes/colors');

console.log(colors.rainbow(`MoMo CLI v${Package.version}`));
console.log(colors.green('=================================================='));

inquirer.prompt([
  {
    type: 'input',
    name: 'functionName',
    message: colors.blue('What is the name of your Function?\n'),
  },
  {
    type: 'list',
    name: 'functionType',
    message: 'What is the type of function?',
    choices: FUNCTION_CHOICES,
  },
]).then(() => {});
