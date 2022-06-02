/**
 * @type {import('next').NextConfig}
 */
module.exports = {
	// Rely on moon for these tasks
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};
