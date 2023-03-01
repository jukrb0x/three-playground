module.exports = {
  trailingComma: 'es5',
  semi: true,
  singleQuote: true,
  printWidth: 180,
  pluginSearchDirs: ['.'],
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
