module.exports = function(api) {
  api.cache.using(() => process.env.NODE_ENV)
  const presets = [
    // use latest js and transform it for all browser support
    [
      '@babel/preset-env',
      {
        // do not transform modules for tree shaking
        modules: false,
      },
    ],
    // transform typescript (does not type-check -> need e.g. ForkTsCheckerWebpackPlugin)
    '@babel/preset-typescript',
    // add react plugins like jsx support
    [
      '@babel/preset-react',
      {
        development: process.env.BABEL_ENV !== 'build',
      },
    ],
  ]

  const plugins = [
    [
      'babel-plugin-styled-components',
      {
        displayName: true,
        fileName: true,
        minify: false,
        ssr: true,
      },
    ],
    '@babel/plugin-proposal-class-properties',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src',
        },
      },
    ],
  ]

  const env = {
    build: {
      ignore: [
        '**/*.test.tsx',
        '**/*.test.ts',
        '**/*.story.tsx',
        '__snapshots__',
        '__tests__',
        '__stories__',
      ],
    },
    test: {
      plugins: ['@babel/transform-modules-commonjs'],
    },
  }

  return {
    presets,
    plugins,
    env,
  }
}
