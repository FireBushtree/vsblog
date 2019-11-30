module.exports = {
  printWidth: 80,
  endOfLine: 'lf',
  singleQuote: true,
  trailingComma: 'all',
  overrides: [{
    files: '*.vue',
    options: {
      parser: 'vue',
      htmlWhitespaceSensitivity: 'ignore',
    },
  }],
};
