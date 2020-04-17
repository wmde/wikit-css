const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx)'],
  addons: ['@storybook/addon-knobs/register', {
    name: '@storybook/addon-docs',
    options: {
      configureJSX: true
    }
  }, '@whitespace/storybook-addon-html/register'],
  webpackFinal: async (config) => {
    // Load less files
    config.module.rules.push({
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  }
};
