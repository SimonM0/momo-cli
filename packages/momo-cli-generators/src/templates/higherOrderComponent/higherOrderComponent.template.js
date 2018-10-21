const higherOrderComponentTemplate = (functionName) => {
  const hocName = functionName.replace('with', '');
  return (
    `import * as React from 'react';
import * as PropTypes from 'prop-types';

/**
 * A description explaining what we use this component for
 *
 * @param {*} WrappedComponent - the component you want to wrap the HOC around
 * @returns {*} a Higher Order Component
 */
export const ${functionName} = (WrappedComponent) => {
  class ${hocName} extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        dummyProp: props.dummyProp,
      };
    }

    render() {
      const { dummyProp } = this.state;
      return (
        <WrappedComponent
          dummyProp={dummyProp}
        />
      );
    }
  }

  ${hocName}.propTypes = {
    dummyProp: PropTypes.string,
  };

  ${hocName}.defaultProps = {
    dummyProp: '${functionName}',
  };

  return ${hocName};
};
`
  );
};

module.exports = higherOrderComponentTemplate;
