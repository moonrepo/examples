module.exports = {
	parser: 'vue-eslint-parser',
	parserOptions: {
		extraFileExtensions: ['.vue'],
		parser: '@typescript-eslint/parser',
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
	},
};
