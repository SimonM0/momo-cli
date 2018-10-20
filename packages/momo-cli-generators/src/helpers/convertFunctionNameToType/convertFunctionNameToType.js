const { FUNCTION_TYPES } = require('../../constants');
const capitaliseWord = require('../capitaliseWord');

/**
 * This function converts the function name depending on function type
 *
 * @param {string} functionName - the function name
 * @param {string} functionType - the function type
 * @returns {*} a converted function name
 */
const convertFunctionNameToType = ({ functionName, functionType }) => {
  switch (functionType) {
    case FUNCTION_TYPES.ACTION:
    case FUNCTION_TYPES.REDUCER:
    case FUNCTION_TYPES.HELPER:
    case FUNCTION_TYPES.SELECTOR:
      return `${functionName}${functionType}`;
    case FUNCTION_TYPES.PLAIN_FUNCTION:
      return functionName;
    case FUNCTION_TYPES.CONTAINER:
      return `${capitaliseWord(functionName)}${functionType}`;
    case FUNCTION_TYPES.COMPONENT:
      return capitaliseWord(functionName);
    default:
      return functionName;
  }
};

module.exports = convertFunctionNameToType;
