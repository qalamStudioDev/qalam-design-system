module.exports = {
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "prettier.config.cjs",
    "postcss.config.cjs",
    "!.storybook",
  ],
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  plugins: [
    "react",
    "react-hooks",
    "storybook",
    "jsx-a11y",
    "react-refresh",
    "import",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/typescript",
      ],
      plugins: ["@typescript-eslint/eslint-plugin"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.json"],
      },
      rules: {
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/no-floating-promises": [
          "error",
          { ignoreVoid: true },
        ],
      },
    },
  ],
  settings: {
    ecmaVersion: "latest",
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: true,
      typescript: true,
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    indent: ["warn", 2],
    "linebreak-style": ["warn", "unix"],
    quotes: ["warn", "double"],
    semi: ["warn", "always"],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "$/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        groups: [
          ["builtin", "external"],
          ["internal"],
          ["parent", "sibling", "index"],
          "unknown",
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
