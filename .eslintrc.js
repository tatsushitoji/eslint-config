/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
const config = {
  env: {
    jest: true,
    node: true,
  },
  extends: ['./index.js'],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2021,
  },
  root: true,
}

module.exports = config
