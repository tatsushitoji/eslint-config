const rules = {
  // FixMe https://github.com/benmosher/eslint-plugin-import/issues/1615
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
      mjs: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-duplicates': 'error',
  'import/order': 'off',
  'import/prefer-default-export': 'off',
}

module.exports = { rules }
