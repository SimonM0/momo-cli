const testTemplate = functionName =>
  `import * as React from 'react';
import { ${functionName} } from '../${functionName}';
import { mount } from 'enzyme';

describe('${functionName}', () => {
  it('should render component', () => {
    const Mounted${functionName} = mount(
      <${functionName} />,
    );
    const expected = Mounted${functionName}.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
`;

module.exports = testTemplate;
