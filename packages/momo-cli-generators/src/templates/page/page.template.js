const pageTemplate = functionName =>
  `import * as React from 'react';
import * as PropTypes from 'prop-types';

/**
 * A description explaining what we use this component for
 *
 * @param {*} props - a descriptions of what props is
 * @returns {*} a React Class Page Component
 */
export class ${functionName} extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyProp: props.dummyProp,
    };
  }

  render() {
    const { dummyProp } = this.state;
    return (
      <div>
        {dummyProp}
      </div>
    );
  }
}

${functionName}.propTypes = {
  dummyProp: PropTypes.string,
};

${functionName}.defaultProps = {
  dummyProp: '${functionName}',
};
`;

module.exports = pageTemplate;
