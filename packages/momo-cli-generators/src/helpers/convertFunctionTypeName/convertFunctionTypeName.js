const capitaliseWord = require('../capitaliseWord');

/**
 * Use this function to convert function names into template file names for
 * selecting the correct template. This function converts 'Plain Function' into
 * `plainFunction`
 *
 * @param {string} functionType - the type of function to convert the name into
 * @returns {string} a converted function type
 */
const convertFunctionTypeName = (functionType) => {
  if (typeof functionType !== 'string') {
    throw new Error('ERROR: functionType must be a string');
  }
  return functionType
    .split(' ')
    .reduce(
      (name, word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        }
        return [name, capitaliseWord(word)].join('');
      },
      '',
    );
};

module.exports = convertFunctionTypeName;
