const { FUNCTION_TYPES } = require('../../../constants');
const getTemplate = require('../getTemplate');

describe('convertFunctionTypeName', () => {
  it('should get a plain function template', () => {
    const expected = getTemplate(
      'myPlainFunction',
      FUNCTION_TYPES.PLAIN_FUNCTION,
      'plainFunction',
    );
    const result = `/**
 * A small description explaining where this function is used and why
 */
export const myPlainFunction = () => {};
`;
    expect(expected)
      .toEqual(result);
  });
});
