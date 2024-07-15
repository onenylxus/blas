import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import js from '@eslint/js';
import eslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/dist', '**/out-tsc', 'tests/routines'],
  },
  ...compat.extends('eslint:recommended', 'plugin:@typescript-eslint/recommended'),
  {
    plugins: {
      '@typescript-eslint': eslint,
    },

    languageOptions: {
      parser,
    },

    rules: {
      'no-empty-pattern': 'off',
    },
  }
];
