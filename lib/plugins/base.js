const { rules: sortRules } = require('../rules/sort')
const { rules: importRules } = require('../rules/import')

const config = {
  plugins: ['simple-import-sort', 'sort-destructure-keys', 'sort-keys-fix'],
  rules: { ...sortRules, ...importRules },
}

module.exports = config
