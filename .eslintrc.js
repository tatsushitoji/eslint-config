/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */

const config = {
  env: {
    jest: true,
    node: true,
    es2020: true,
  },
  extends: ['./index.js'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  root: true,
}

module.exports = config
