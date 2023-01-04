module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  endOfLine: "lf",
  trailingComma: "none",
  semi: true,
  bracketSpacing: true,
  singleQuote: false,
  quoteProps: "consistent",
  bracketSameLine: true,
  plugins: [require("@trivago/prettier-plugin-sort-imports")],
  importOrder: ["^@(.*)/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderParserPlugins: ["typescript", "classProperties", "jsx"],
  importOrderSortSpecifiers: true
};
