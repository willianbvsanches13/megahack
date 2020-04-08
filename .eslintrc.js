module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "airbnb-base"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018
  },
  settings: {
    "import/resolver": {
      node: {
        path: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        moduleDirectory: ['node_modules', 'src/'],
      }
    }
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-underscore-dangle":"off",
    "class-methods-use-this": "off",
    "@typescript-eslint/camelcase": "off",
    "camelcase": "off",
    '@typescript-eslint/no-explicit-any': ['error', {
      fixToUnknown: true
    }],
    "import/extensions": [
      "error",
      "never"
    ],
    "import/no-unresolved": "off"
  }
};
