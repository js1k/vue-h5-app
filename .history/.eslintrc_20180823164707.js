// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    indent: ['error', 4, {
        'SwitchCase': 1
      }],
      'space-before-function-paren': ['error', 'never'],
      'vue/html-indent': ['error', 4],
      'vue/max-attributes-per-line': [
        2,
        {
          singleline: 1,
          multiline: {
            max: 1,
            allowFirstLine: true
          }
        }
      ],
  }
}
