const FUNCTION_TYPES = require('./src/constants/FUNCTION_TYPES');

module.exports = {
  /**
   * These are the types of functions that a user can generate
   */
  FUNCTION_CHOICES: [
    FUNCTION_TYPES.ACTION,
    FUNCTION_TYPES.COMPONENT,
    FUNCTION_TYPES.CONTAINER,
    FUNCTION_TYPES.HELPER,
    FUNCTION_TYPES.PLAIN_FUNCTION,
    FUNCTION_TYPES.REDUCER,
    FUNCTION_TYPES.SELECTOR,
  ],
};
