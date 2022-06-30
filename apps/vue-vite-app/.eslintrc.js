module.exports = {
	extends: ['plugin:vue/vue3-recommended'],
	parser: 'vue-eslint-parser',
	parserOptions: {
		extraFileExtensions: ['.vue'],
		parser: '@typescript-eslint/parser',
		project: 'tsconfig.vitest.json',
		tsconfigRootDir: __dirname,
	},
	rules: {
		'node/no-unpublished-import': 'off',

		// Imported Vue files resolve as any
		'@typescript-eslint/no-unsafe-argument': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
	},
};
