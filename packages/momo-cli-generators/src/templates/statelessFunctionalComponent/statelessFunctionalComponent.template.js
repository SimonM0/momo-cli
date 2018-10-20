const statelessFunctionalComponentTemplate = functionName =>
  `import * as React from 'react';
import PropTypes from 'prop-types';

/**
 * A description explaining what we use this component for
 *
 * @param {*} props - a descriptions of what props is
 * @returns {*} a React Stateless Functional Component
 */
export const ${functionName} = props => (
  <div>
    ${functionName}
  </div>
);

${functionName}.propTypes = {};

${functionName}.defaultProps = {};
`;

module.exports = statelessFunctionalComponentTemplate;
