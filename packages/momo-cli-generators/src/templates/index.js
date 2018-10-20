const { FUNCTION_TYPES } = require('../constants');
const plainFunctionTemplates = require('./plainFunction');

module.exports = {
  [FUNCTION_TYPES.PLAIN_FUNCTION]: plainFunctionTemplates,
};
