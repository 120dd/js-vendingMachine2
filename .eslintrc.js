module.exports = {
    parser: "@babel/eslint-parser",
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
    plugins: ['prettier', 'mocha', "@babel"],
    rules: {
        'import/prefer-default-export': 'off',
        'import/extensions': ['off'],
        'class-methods-use-this': 'off',
        'no-alert': 'off',
        'no-undef': 'off',
        'array-callback-return': 'off',
    },
};
