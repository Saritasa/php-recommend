module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/eslint-config-airbnb',
  ],
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    'no-tabs': 0,
    'arrow-parens': ['error', 'as-needed']
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
