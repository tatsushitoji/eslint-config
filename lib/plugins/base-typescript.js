const config = {
  overrides: [
    {
      extends: ['./base.js'],
      files: ['**/*.ts', '**/*.tsx'],
    },
  ],
  plugins: ['typescript-sort-keys'],
}

module.exports = config
