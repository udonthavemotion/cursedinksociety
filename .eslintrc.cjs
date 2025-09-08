module.exports = {
  root: true,
  env: { node: true, es2022: true, browser: true },
  extends: [
    "eslint:recommended",
    "@typescript-eslint/recommended",
    "plugin:astro/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"]
      },
      rules: {
        "astro/no-unused-define-vars-in-style": "off"
      }
    }
  ],
  ignorePatterns: ["dist", "node_modules"]
};
