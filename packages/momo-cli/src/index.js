#!/usr/bin/env node
const functionGenerator = require('momo-cli-generators');
const Package = require('../package.json');
const colors = require('./themes/colors');

console.log(colors.rainbow(`MoMo CLI v${Package.version}`));
console.log(colors.green('=================================================='));

functionGenerator();
