const config = {
  overrides: [
    {
      extends: [
        'airbnb',
        'airbnb-typescript/base',
        'prettier',
        './plugins/base.js',
      ],
      files: ['**/*.ts'],
    },
  ],
}

module.exports = config
