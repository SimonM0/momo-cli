const get = require('lodash/get');
const templates = require('../../templates');

const getTemplate = (functionName, functionType, fileName) => {
  const templateFunction = get(templates, [functionType, fileName]);

  if (!templateFunction) {
    throw new Error(
      `ERROR: Missing ${fileName} template file for ${functionType}`,
    );
  }

  return templateFunction(functionName);
};

module.exports = getTemplate;
