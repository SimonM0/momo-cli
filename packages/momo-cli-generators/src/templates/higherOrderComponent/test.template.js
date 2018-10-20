const testTemplate = functionName =>
  `import * as React from 'react';
import { ${functionName} } from '../${functionName}';
import { mount } from 'enzyme';

describe('${functionName}', () => {
  it('should render component', () => {
    const DummyComponent = ${functionName}(() => null);
    const MountedHOC = mount(
      <DummyComponent />,
    );
    const expected = MountedHOC.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
`;

module.exports = testTemplate;
