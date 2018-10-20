const { FUNCTION_TYPES } = require('../constants');
const plainFunctionTemplates = require('./plainFunction');
const actionTemplates = require('./action');

module.exports = {
  [FUNCTION_TYPES.ACTION]: actionTemplates,
  [FUNCTION_TYPES.PLAIN_FUNCTION]: plainFunctionTemplates,
};
