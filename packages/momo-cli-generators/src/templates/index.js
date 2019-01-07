const { FUNCTION_TYPES, COMPONENT_TYPES } = require('../constants');
const plainFunctionTemplates = require('./plainFunction');
const actionTemplates = require('./action');
const selectorTemplates = require('./selector');
const reducerTemplates = require('./reducer');
const containerTemplates = require('./container');
const statelessFunctionalComponent = require('./statelessFunctionalComponent');
const classComponent = require('./classComponent');
const pureComponent = require('./pureComponent');
const page = require('./page');
const screen = require('./screen');
const higherOrderComponent = require('./higherOrderComponent');
const helperTemplates = require('./helper');

module.exports = {
  [FUNCTION_TYPES.ACTION]: actionTemplates,
  [FUNCTION_TYPES.PLAIN_FUNCTION]: plainFunctionTemplates,
  [FUNCTION_TYPES.SELECTOR]: selectorTemplates,
  [FUNCTION_TYPES.REDUCER]: reducerTemplates,
  [FUNCTION_TYPES.CONTAINER]: containerTemplates,
  [FUNCTION_TYPES.HELPER]: helperTemplates,
  [COMPONENT_TYPES.SFC]: statelessFunctionalComponent,
  [COMPONENT_TYPES.CLASS]: classComponent,
  [COMPONENT_TYPES.PURE]: pureComponent,
  [COMPONENT_TYPES.PAGE]: page,
  [COMPONENT_TYPES.SCREEN]: screen,
  [COMPONENT_TYPES.HOC]: higherOrderComponent,
};
