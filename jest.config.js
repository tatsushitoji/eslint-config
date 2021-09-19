/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  testEnvironment: 'node',
}

module.exports = config
