/** @type {import("prettier").Options} */
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'none',
  singleAttributePerLine: true,
  semi: false
}
