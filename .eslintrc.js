// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     node: true
//   },
//   parserOptions: {
//     parser: 'babel-eslint'
//   },
//   extends: [
//     "eslint:recommended",
//     "plugin:vue/recommended"

//   ],
//   // required to lint *.vue files
//   plugins: [
//     // "plugin:vue/essential",
//     // "plugin:prettier/recommended",
//     // 'vue/essential',
//     // "eslint:recommended"

//   ],
//   // add your custom rules here
//   rules: {
//     // allow async-await
//     'generator-star-spacing': 'off',
//     'space-before-function-paren': 'off'
//   }
// }
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // "eslint:recommended",
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    "plugin:prettier/recommended"
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "prettier/prettier": ["warn", {
      "singleQuote": true
    }],
    "semi": [2, "never"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "prettier/prettier": ["error", {
      "semi": false
    }]
  }
}
