module.exports = {
  stories: ['../../src/**/*.story.*'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    'themeprovider-storybook',
    '@dump247/storybook-state',
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
}
