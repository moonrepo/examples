module.exports = {
	plugins: ['svelte3'],
	ignorePatterns: ['*.cjs'],
	settings: {
		'svelte3/typescript': () => require('typescript'),
	},
	rules: {
		'no-magic-numbers': 'off',

		// Dont play nice with svelte syntax
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
	},
	overrides: [
		{ files: ['*.svelte'], processor: 'svelte3/svelte3' },
		{
			files: ['*.test.ts'],
			rules: {
				// Doesn't like vitest
				'import/no-extraneous-dependencies': 'off',
				'node/no-unpublished-import': 'off',
			},
		},
	],
};
