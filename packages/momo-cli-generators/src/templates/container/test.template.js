const testTemplate = functionName =>
  `import { mapStateToProps, mapDispatchToProps } from '../${functionName}';

describe('${functionName}', () => {
  it('should map the state to props', () => {
    const mockState = {};
    const expected = mapStateToProps(mockState);
    const result = {};
    expect(expected).toEqual(result);
  });
  it('should map dispatch to props', () => {
    const mockDispatch = jest.fn();
    const expected = mapDispatchToProps(mockDispatch);
    const result = {};
    expect(expected).toEqual(result);
  });
});
`;

module.exports = testTemplate;
