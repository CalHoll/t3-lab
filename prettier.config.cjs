/** @type {import("prettier").Config} */
const config = {
  semi: true,
  singleQuote: true,
  trailingComma: "es5",
  printWidth: 80,

  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
