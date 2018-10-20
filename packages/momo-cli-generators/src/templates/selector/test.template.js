const { FUNCTION_TYPES } = require('../../constants');
const capitaliseWord = require('../../helpers/capitaliseWord');

const testTemplate = (functionName) => {
  const functionNameWithoutType = functionName
    .replace(FUNCTION_TYPES.SELECTOR, '');
  const getFunctionName = `get${capitaliseWord(functionNameWithoutType)}`;
  return (
    `import { ${getFunctionName}, ${functionName} } from '../${functionName}';

describe('${getFunctionName}', () => {
  it('should select data from the store state', () => {
    const mockState = {
      mockParam: {
        mockData: 'mockString',
      },
    };
    const expected = ${getFunctionName}(mockState);
    const result = 'mockString';
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {
      mockParam: {
        mockData: 'mockString',
      },
    };
    const expected = ${getFunctionName}(mockState);
    const result = '';
    expect(expected).toEqual(result);
  });
});

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
