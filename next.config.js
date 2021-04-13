const withImages = require('next-images');

module.exports = withImages({
  webpack(config) {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
