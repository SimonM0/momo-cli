const testTemplate = functionName =>
  `import { ${functionName} } from '../${functionName}';

describe('${functionName}', () => {
  it('should ', () => {
    const expected = ${functionName}();
    const result = true;
    expect(expected).toEqual(result);
  });
});
`;

module.exports = testTemplate;
