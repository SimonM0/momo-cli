const { FUNCTION_TYPES, COMPONENT_TYPES } = require('../../constants');
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
    case COMPONENT_TYPES.PURE:
    case COMPONENT_TYPES.CLASS:
    case COMPONENT_TYPES.SFC:
      return capitaliseWord(functionName);
    case COMPONENT_TYPES.HOC:
      return `with${capitaliseWord(functionName)}HOC`;
    case COMPONENT_TYPES.PAGE:
      return `${functionName}Page`;
    case COMPONENT_TYPES.SCREEN:
      return `${functionName}Screen`;
    default:
      return functionName;
  }
};

module.exports = convertFunctionNameToType;
