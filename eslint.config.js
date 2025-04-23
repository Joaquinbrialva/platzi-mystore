import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
  js.config({
    env: {
      es6: true,
      node: true,
      jest: true
    },
    rules: {
      'no-console': 'warn',
    },
  }),
  prettier,
];
