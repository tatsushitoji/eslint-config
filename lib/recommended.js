const config = {
  overrides: [
    // RuleSet for JavaScript
    {
      extends: ['airbnb', 'airbnb/hooks', 'prettier'],
      files: ['**/*.js', '**/*.jsx'],
    },
    // RuleSet for TypeScript
    {
      extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'prettier'],
      files: ['**/*.ts', '**/*.tsx'],
    },
  ],
}

module.exports = config
