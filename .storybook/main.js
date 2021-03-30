const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
module.exports = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config) => {
    [].push.apply(config.resolve.plugins, [new TsconfigPathsPlugin({ extensions: config.resolve.extensions })]);
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
