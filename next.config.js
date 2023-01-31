/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['res.cloudinary.com'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				pathname: '/raine/**',
			},
		],
		webpack(config) {
			config.resolve.alias = {
				...config.resolve.alias,
				'@styles': path.resolve(__dirname, 'src/styles'),
			};

			return config;
		},
	},
};

module.exports = nextConfig;
