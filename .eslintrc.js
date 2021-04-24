module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'space-before-function-paren': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    eqeqeq: 2,
    'no-undef': 0,
    'no-var': 'error', // 禁用var，用let和const代替
    'no-implicit-coercion': 1,
    'no-use-before-define': 2,
    'no-unused-vars': [2, { vars: 'all', args: 'after-used' }],
    'use-isnan': 2, // 禁止比较时使用NaN，只能用isNaN()
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ]
  }
}
