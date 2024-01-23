module.exports = {
  semi: false,
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  trailingComma: "es5",
  overrides: [
    {
      files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
      excludedFiles: ["/apps/spa/node_modules"],
    },
  ],
};
