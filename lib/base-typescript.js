const config = {
  overrides: [
    {
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'prettier',
        './plugins/base.js',
      ],
      files: ['**/*.ts'],
    },
  ],
}

module.exports = config
