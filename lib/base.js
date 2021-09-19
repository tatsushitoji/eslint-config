const config = {
  overrides: [
    {
      extends: ['airbnb-base', 'prettier', './plugins/base.js'],
      files: ['**/*.js'],
    },
  ],
}

module.exports = config
