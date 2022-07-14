module.exports = {
    env: {
        es6: true,
        node: true,
        jest: true,
        browser: true
    },
    extends: [
        'airbnb-base',
        'plugin:vue/recommended'
    ],
    parser: 'vue-eslint-parser',
    rules: {
        indent: ['error', 4],
        semi: ['error', 'never'],
        'comma-dangle': ['error', 'never'],
        // vue
        'vue/html-indent': ['error', 4]
    }
}
