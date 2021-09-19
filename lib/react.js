const config = {
  overrides: [
    {
      extends: ['airbnb', 'prettier', './plugins/base.js'],
      files: ['**/*.js'],
    },
  ],
}

module.exports = config
