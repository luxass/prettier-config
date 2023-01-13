// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
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
  plugins: [require("@ianvs/prettier-plugin-sort-imports")],
  importOrder: ["^(@|~)(.*)/(.*)$", "^[./]"],
  importOrderBuiltinModulesToTop: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ["typescript", "jsx", "classProperties"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: false,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};
