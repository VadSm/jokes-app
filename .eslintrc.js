module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  rules: {
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-fragments": 0,
    "arrow-parens": [2, "as-needed", { "requireForBlockBody": true }],
    "no-shadow": 0,
    "@typescript-eslint/explicit-function-return-type": 0
  },
  // overrides: [
  //   {
  //     "files": ["*.ts", "*.tsx"],
  //     "rules": {
  //       "@typescript-eslint/explicit-function-return-type": [
  //         "error",
  //         {
  //           "allowExpressions": true,
  //           "allowTypedFunctionExpressions": true,
  //           "allowHigherOrderFunctions": true,
  //         }
  //       ]
  //     }
  //   }
  // ]
};