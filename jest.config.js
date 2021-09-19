/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
}

module.exports = config
