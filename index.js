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
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    strict: 'error',
  },
};
