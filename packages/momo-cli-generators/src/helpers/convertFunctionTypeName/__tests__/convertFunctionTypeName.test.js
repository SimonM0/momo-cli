const { FUNCTION_TYPES } = require('../../../constants');
const convertFunctionTypeName = require('../convertFunctionTypeName');

describe('convertFunctionTypeName', () => {
  it('should convert FUNCTION_TYPES.PLAIN_FUNCTION into template name', () => {
    const expected = convertFunctionTypeName(FUNCTION_TYPES.PLAIN_FUNCTION);
    const result = 'plainFunction';
    expect(expected)
      .toEqual(result);
  });
  it('should convert FUNCTION_TYPES.ACTION into template name', () => {
    const expected = convertFunctionTypeName(FUNCTION_TYPES.ACTION);
    const result = 'action';
    expect(expected)
      .toEqual(result);
  });
  it('should throw if functionType is not a string', () => {
    const mockFunctionType = 1234;
    const expected = () => convertFunctionTypeName(mockFunctionType);
    expect(expected)
      .toThrow();
  });
});
