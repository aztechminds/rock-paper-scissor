import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "script"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];

// {
//   rules: {
//     "no-console": "off",
//     "no-unused-vars": "off",
//     "no-undef": "off",
//     "prefer-const": "error",
//     "eqeqeq": "error",
//     "quotes": ["error", "double"],
//     "semi": ["error", "always"],
//     "no-var": "error",
//     "curly": "error",
//     "camelcase": "error",
//   }
// }