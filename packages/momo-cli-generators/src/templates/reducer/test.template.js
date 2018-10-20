const testTemplate = functionName =>
  `import Immutable from 'seamless-immutable';
import { ${functionName} } from '../${functionName}';

describe('${functionName}', () => {
  it('should update the state and return the new state', () => {
    const mockState = Immutable({
      mockParam: {},
    });
    const mockPayload = 'mockPayload';
    const expected = ${functionName}(mockState, mockPayload);
    const result = Immutable({
      mockParam: {
        mockData: 'mockPayload',
      },
    });
    expect(expected).toEqual(result);
  });
});
`;

module.exports = testTemplate;
