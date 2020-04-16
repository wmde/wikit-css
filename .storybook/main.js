module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx)'],
  addons: [{
    name: '@storybook/addon-docs',
    options: {
      configureJSX: true
    }
  }, '@whitespace/storybook-addon-html/register']
};
