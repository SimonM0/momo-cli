const { FUNCTION_TYPES, COMPONENT_TYPES } = require('../constants');
const plainFunctionTemplates = require('./plainFunction');
const actionTemplates = require('./action');
const selectorTemplates = require('./selector');
const reducerTemplates = require('./reducer');
const containerTemplates = require('./container');
const statelessFunctionalComponent = require('./statelessFunctionalComponent');
const classComponent = require('./classComponent');

module.exports = {
  [FUNCTION_TYPES.ACTION]: actionTemplates,
  [FUNCTION_TYPES.PLAIN_FUNCTION]: plainFunctionTemplates,
  [FUNCTION_TYPES.SELECTOR]: selectorTemplates,
  [FUNCTION_TYPES.REDUCER]: reducerTemplates,
  [FUNCTION_TYPES.CONTAINER]: containerTemplates,
  [COMPONENT_TYPES.SFC]: statelessFunctionalComponent,
  [COMPONENT_TYPES.CLASS]: classComponent,
};
