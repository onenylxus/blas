module.exports = {
  root: true,
  ignorePatterns: ['dist', 'out-tsc', 'tests/routines'],
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-empty-pattern': 'off',
  },
};
