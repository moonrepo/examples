/* eslint-disable sort-keys */

// https://www.npmjs.com/package/eslint-config-beemo
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.eslint.json',
		tsconfigRootDir: __dirname,
	},
	extends: [
		'beemo',
		'beemo/node',
		// Uncomment when targeting browsers
		// 'beemo/browser',
		// Uncomment if using React/JSX
		// 'beemo/react',
	],
	rules: {
		// Doesn't understand the new TS 4.7 imports
		'import/no-unresolved': 'off',

		// We need to keep "index" around in imports for extensions
		'import/no-useless-path-segments': 'off',
	},
	overrides: [
		{
			files: ['apps/**/*'],
			rules: {
				// App pages require default exports
				'import/no-default-export': 'off',
			},
		},
		{
			files: ['*.config.js', '.eslintrc.js'],
			rules: {
				'sort-keys': 'off',
				'import/no-commonjs': 'off',
				'unicorn/prefer-module': 'off',
			},
		},
	],
};
