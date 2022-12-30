module.exports = {
  swcMinify: true,
  images: {
    // loader: 'cloudinary',
    domains: ['res.cloudinary.com'],
    formats: ['image/webp'],
    minimumCacheTTL: 31536000,
  },
  eslint: {
    dirs: ['src'],
  },
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  },
  reactStrictMode: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};
