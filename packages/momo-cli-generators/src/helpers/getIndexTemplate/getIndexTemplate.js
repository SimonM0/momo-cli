const { indexTemplates } = require('../../templates');

const getIndexTemplate = (functionName, functionType) => {
  const templateFunction = indexTemplates[functionType];
  return templateFunction(functionName);
};

module.exports = getIndexTemplate;
