// separate configuration for @babel/preset-env for browser and server
const presetEnvTargets = {
  browser: {
    targets: {
      chrome: '58',
      ie: '11',
      safari: '7',
      android: '4.4',
    },
    // leave imports as they are
    modules: false,
  },
  server: {
    targets: {
      node: 'current',
    },
    modules: false,
  },
}

function isServerBuild() {
  return process.env.BABEL_ENV === 'server'
}

module.exports = function(api) {
  api.cache.using(() => process.env.NODE_ENV)
  const presets = [
    // use latest js and transform it for all browser support
    ['@babel/preset-env', presetEnvTargets[isServerBuild() ? 'server' : 'browser']],
    // transform typescript (does not type-checl -> need e.g. ForkTsCheckerWebpackPlugin)
    '@babel/preset-typescript',
    // add react plugins like jsx support
    '@babel/preset-react',
  ]

  const plugins = [
    'babel-plugin-styled-components',
    // transform ES2015 params to es5
    '@babel/plugin-transform-parameters',
    // allow for class use
    '@babel/plugin-proposal-class-properties',
    // same as ts emitDecoratorMetadata (allows stage 2)
    'babel-plugin-transform-typescript-metadata',
    // allows rest destructuring of objects
    '@babel/plugin-proposal-object-rest-spread',
    // allows optional chaining
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ]

  const env = {
    test: {
      plugins: [
        'babel-plugin-styled-components',
        '@babel/transform-modules-commonjs',
        'dynamic-import-node',
      ],
    },
  }

  return {
    presets,
    plugins,
    env,
  }
}
