const { FUNCTION_TYPES } = require('../constants');
const plainFunctionTemplates = require('./plainFunction');
const actionTemplates = require('./action');
const selectorTemplates = require('./selector');

module.exports = {
  [FUNCTION_TYPES.ACTION]: actionTemplates,
  [FUNCTION_TYPES.PLAIN_FUNCTION]: plainFunctionTemplates,
  [FUNCTION_TYPES.SELECTOR]: selectorTemplates,
};
