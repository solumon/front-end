module.exports = {
    env: {
        es6: true,
        node: true,
        jest: true,
        browser: true
    },
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/recommended'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2022,
        sourceType: 'module',
        extraFileExtensions: ['.vue']
    },

    plugins: ['@typescript-eslint', 'vue'],
    rules: {
        indent: ['error', 4],
        semi: ['error', 'never'],
        'comma-dangle': ['error', 'never'],
        // vue
        'vue/html-indent': ['error', 4]
    }
}
