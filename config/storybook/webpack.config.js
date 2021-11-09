const path = require('path')
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin')

// Overwrite the Storybook webpack config
module.exports = ({ config, mode }) => {
  const rules = config.module.rules
  // exclude rules we don't want to have
  const fileLoaderRule = rules.find(rule => rule.test.test('.svg'))
  fileLoaderRule.exclude = /\.(svg|woff|woff2)$/

  // add our own rules
  config.module.rules.push(
    {
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
      },
    },
    {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
      loader: require.resolve('file-loader'),
      query: {
        name: 'static/media/[name].[hash:8].[ext]',
      },
    },
    {
      test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
      loader: require.resolve('url-loader'),
      query: {
        limit: 10000,
        name: 'static/media/[name].[hash:8].[ext]',
      },
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: 'babel-loader',
        },
        {
          loader: '@svgr/webpack',
          options: { babel: false },
        },
      ],
    }
  )

  config.resolve.extensions.push('.ts', '.tsx', '.jsx', '.css', '.svg', '.md')
  config.resolve.alias['@'] = path.join(__dirname, '../../src')
  config.plugins.push(new ForkTsCheckerPlugin())

  return config
}
