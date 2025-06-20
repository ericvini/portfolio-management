import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import pluginPrettier from 'eslint-plugin-prettier';
import prettierRecommended from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
      globals: {
        require: 'readonly',
        module: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs,
      prettier: pluginPrettier,
    },
    rules: {
      ...eslintPluginTs.configs.recommended.rules,
      ...prettierRecommended.rules,
      'prettier/prettier': [
        'error',
        {
         "endOfLine": "auto",
        },
      ],
    },
    ignores: ['node_modules', 'dist'],
  },
];
