const testTemplate = (functionName) => {
  return (
    `import { ${functionName} } from '../${functionName}';

describe('${functionName}', () => {
  it('should select data from the store state', () => {
    const mockState = {
      mockParam: {
        mockData: 'mockString',
      },
    };
    const expected = ${functionName}(mockState);
    const result = 'mockString';
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {
      mockParam: {
        mockData: 'mockString',
      },
    };
    const expected = ${functionName}(mockState);
    const result = '';
    expect(expected).toEqual(result);
  });
});
`
  );
};

module.exports = testTemplate;
