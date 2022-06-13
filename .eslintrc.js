module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': ['off', { extensions: ['.jsx', '.tsx'] }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'comma-dangle': ['error', 'never'],
    'padded-blocks': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off'
  }
};
