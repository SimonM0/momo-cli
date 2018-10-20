const { FUNCTION_TYPES } = require('../../../constants');
const convertFunctionNameToType = require('../convertFunctionNameToType');

describe('convertFunctionNameToType', () => {
  it('should append Action to actions', () => {
    const mockAnswers = {
      functionName: 'incrementCounter',
      functionType: FUNCTION_TYPES.ACTION,
    };
    const expected = convertFunctionNameToType(mockAnswers);
    const result = 'incrementCounterAction';
    expect(expected)
      .toEqual(result);
  });
  it('should append Container to containers and ', () => {
    const mockAnswers = {
      functionName: 'headerBanner',
      functionType: FUNCTION_TYPES.CONTAINER,
    };
    const expected = convertFunctionNameToType(mockAnswers);
    const result = 'HeaderBannerContainer';
    expect(expected)
      .toEqual(result);
  });
  it('should append Helper to helpers and ', () => {
    const mockAnswers = {
      functionName: 'incrementCounter',
      functionType: FUNCTION_TYPES.HELPER,
    };
    const expected = convertFunctionNameToType(mockAnswers);
    const result = 'incrementCounterHelper';
    expect(expected)
      .toEqual(result);
  });
  it('should user function name for plain functions', () => {

    const mockAnswers = {
      functionName: 'incrementCounter',
      functionType: FUNCTION_TYPES.PLAIN_FUNCTION,
    };
    const expected = convertFunctionNameToType(mockAnswers);
    const result = 'incrementCounter';
    expect(expected)
      .toEqual(result);
  });
  it('should append Reducer for Reducers', () => {
    const mockAnswers = {
      functionName: 'incrementCounter',
      functionType: FUNCTION_TYPES.REDUCER,
    };
    const expected = convertFunctionNameToType(mockAnswers);
    const result = 'incrementCounterReducer';
    expect(expected)
      .toEqual(result);
  });
  it('should append Selector for Selectors', () => {
    const mockAnswers = {
      functionName: 'counterValue',
      functionType: FUNCTION_TYPES.SELECTOR,
    };
    const expected = convertFunctionNameToType(mockAnswers);
    const result = 'counterValueSelector';
    expect(expected)
      .toEqual(result);
  });
  it('should capitalize the first letter of components', () => {
    const mockAnswers = {
      functionName: 'headerBanner',
      functionType: FUNCTION_TYPES.COMPONENT,
    };
    const expected = convertFunctionNameToType(mockAnswers);
    const result = 'HeaderBanner';
    expect(expected)
      .toEqual(result);
  });
});
