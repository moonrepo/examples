// https://www.npmjs.com/package/prettier-config-moon
const config = require('prettier-config-moon');

module.exports = {
	...config,
	plugins: ['prettier-plugin-svelte'],
	// pluginSearchDirs: ['.'],
	overrides: [...config.overrides, { files: '*.svelte', options: { parser: 'svelte' } }],
};
