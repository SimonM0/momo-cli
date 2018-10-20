const capitaliseWord = require('../capitaliseWord');

describe('capitaliseWord', () => {
  it('should convert `capitaliseWord` to `CapitaliseWord`', () => {
    const mockWord = 'capitaliseWord';
    const expected = capitaliseWord(mockWord);
    const result = 'CapitaliseWord';
    expect(expected).toEqual(result);
  });
});
