/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  i18n: {
    locales: ['en-US', 'ukr'],
    defaultLocale: 'en-US',
  },
  async redirects() {
    return [
      {
        source: '/:path',
        has: [
          {
            type: 'host',
            value: 'https://svit-web-next.vercel.app/',
          },
        ],
        permanent: false,
        destination: '/',
      },
    ]
  },
}

module.exports = {
  ...nextConfig,
  webpack: (
    config, { isServer }
  ) => {
    const prefix = config.assetPrefix ?? config.basePath ?? '';

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    config.module.rules.push({
      test: /\.mp4$/,
      use: [{
        loader: 'file-loader',
        options: {
          publicPath: `${prefix}/_next/static/media/`,
          outputPath: `${isServer ? '../' : ''}static/media/`,
          name: '[name].[hash].[ext]',
        },
      }],
    });

    // Important: return the modified config
    return config
  },
}
