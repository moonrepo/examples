/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: ['@remix-run/eslint-config', '@remix-run/eslint-config/node'],

	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
	},
};
