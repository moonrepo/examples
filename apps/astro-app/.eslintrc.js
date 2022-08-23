module.exports = {
	extends: ['plugin:astro/recommended'],
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
				project: 'tsconfig.json',
				tsconfigRootDir: __dirname,
			},
			rules: {
				'unicorn/text-encoding-identifier-case': 'off',
				// `Astro.props` is typed with any
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/no-unsafe-member-access': 'off',
			},
		},
	],
};
