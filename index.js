module.exports = {
  root: true,
  globals: {
    _rc: true,
    ga: true,
    mixpanel: true
  },
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ].concat(['./rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
  ].map(require.resolve)),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'ember'
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    strict: 'error',
    'ember/named-functions-in-promises': 'off'
  },
};
