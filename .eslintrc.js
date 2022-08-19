module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
	plugins: ['prettier', 'mocha'],
	rules: {
		'import/prefer-default-export': 'off',
		'import/extensions': ['off'],
		'class-methods-use-this': 'off',
		'no-alert': 'off',
		'no-undef': 'off',
		'array-callback-return': 'off',
	},
};
