module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  globals: {
    React: true,
    JSX: true,
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'jsx-a11y/label-has-associated-control': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': ['off', { extensions: ['.jsx', '.tsx'] }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'max-len': 'off',
    'function-paren-newline': 'off',
    'no-confusing-arrow': 'off',
    'implicit-arrow-linebreak': 'off',
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
  },
};
