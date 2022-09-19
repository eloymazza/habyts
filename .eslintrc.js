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
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': ['off', { extensions: ['.jsx', '.tsx'] }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },
};
