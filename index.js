module.exports = {
  extends: [
    './rules/imports',
    './rules/possible-errors',
    './rules/best-practices',
    './rules/variables',
    './rules/node',
    './rules/stylistic-issues',
    './rules/es2015'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    env: {
      es6: true,
      jest: true
    },
    sourceType: 'module'
  },
  rules: {
    strict: 'error',
  },
};
