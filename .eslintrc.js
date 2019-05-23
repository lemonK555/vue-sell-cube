module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0,/* 函数左括号 */
    'indent': 0/* 最外层括号缩进不检验 */
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
