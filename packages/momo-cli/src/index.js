#!/usr/bin/env node
const functionGenerator = require('momo-cli-generators');
const Package = require('../package.json');
const colors = require('./themes/colors');

console.log(colors.rainbow(`MoMo CLI v${Package.version}`));
console.log(colors.green('=================================================='));

// TODO: If there is no arg then inquire else run the arg associated command

functionGenerator();
