const { FUNCTION_TYPES } = require('../../../constants');
const convertFunctionNameToType = require('../convertFunctionNameToType');

describe('convertFunctionNameToType', () => {
  it('should append Action to actions', () => {
    const mockFunctionName = 'incrementCounter';
    const expected = convertFunctionNameToType(
      mockFunctionName,
      FUNCTION_TYPES.ACTION,
    );
    const result = 'incrementCounterAction';
    expect(expected)
      .toEqual(result);
  });
  it('should append Container to containers and ', () => {
    const mockFunctionName = 'headerBanner';
    const expected = convertFunctionNameToType(
      mockFunctionName,
      FUNCTION_TYPES.CONTAINER,
    );
    const result = 'HeaderBannerContainer';
    expect(expected)
      .toEqual(result);
  });
  it('should append Helper to helpers and ', () => {
    const mockFunctionName = 'incrementCounter';
    const expected = convertFunctionNameToType(
      mockFunctionName,
      FUNCTION_TYPES.HELPER,
    );
    const result = 'incrementCounterHelper';
    expect(expected)
      .toEqual(result);
  });
  it('should user function name for plain functions', () => {
    const mockFunctionName = 'incrementCounter';
    const expected = convertFunctionNameToType(
      mockFunctionName,
      FUNCTION_TYPES.PLAIN_FUNCTION,
    );
    const result = 'incrementCounter';
    expect(expected)
      .toEqual(result);
  });
  it('should append Reducer for Reducers', () => {
    const mockFunctionName = 'incrementCounter';
    const expected = convertFunctionNameToType(
      mockFunctionName,
      FUNCTION_TYPES.REDUCER,
    );
    const result = 'incrementCounterReducer';
    expect(expected)
      .toEqual(result);
  });
  it('should append Selector for Selectors', () => {
    const mockFunctionName = 'counterValue';
    const expected = convertFunctionNameToType(
      mockFunctionName,
      FUNCTION_TYPES.SELECTOR,
    );
    const result = 'counterValueSelector';
    expect(expected)
      .toEqual(result);
  });
  it('should capitalize the first letter of components', () => {
    const mockFunctionName = 'headerBanner';
    const expected = convertFunctionNameToType(
      mockFunctionName,
      FUNCTION_TYPES.COMPONENT,
    );
    const result = 'HeaderBanner';
    expect(expected)
      .toEqual(result);
  });
});
