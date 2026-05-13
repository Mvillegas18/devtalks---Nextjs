import type { NextConfig } from 'next'
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
	/* config options here */
	typedRoutes: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'pktgskxppz.ufs.sh',
				// This pattern allows images from any path under imagedelivery.net
			},
		],
	},
}

export default nextConfig
