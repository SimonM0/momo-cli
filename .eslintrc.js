module.exports = {
  'extends': ['airbnb'],
  'rules': {
    'import/prefer-default-export': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-console': 'off',
    'max-len': [
      'error',
      {
        'code': 80,
        'ignorePattern': '',
      },
    ],
  },
  'env': {
    'node': true,
    'jest': true,
    'es6': true,
  }
};
