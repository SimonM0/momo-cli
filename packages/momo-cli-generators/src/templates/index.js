const { FUNCTION_TYPES } = require('../constants');

module.exports = {
  indexTemplates: {
    [FUNCTION_TYPES.PLAIN_FUNCTION]: functionName => (
      `export { ${functionName} } from './${functionName}';
`
    ),
  },
};
