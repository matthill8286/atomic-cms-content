import svgr from '@svgr/rollup'
import alias from 'rollup-plugin-alias'
import babel from 'rollup-plugin-babel'
import cleaner from 'rollup-plugin-cleaner'
import commonjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import resolve from 'rollup-plugin-node-resolve'
import progress from 'rollup-plugin-progress'
import { terser } from 'rollup-plugin-terser'
import url from 'rollup-plugin-url'
import visualizer from 'rollup-plugin-visualizer'

const extensions = ['.js', '.jsx', '.ts', '.tsx']
const isProduction = process.env.NODE_ENV === 'production'

// eslint-disable-next-line import/no-default-export
export default [
  // for config info go to https://rollupjs.org/guide/en/
  {
    input: 'src/index.ts',
    // CommonJS (for Node) and ES module (for bundlers) build.
    output: [
      {
        dir: './dist',
        format: 'esm',
        sourcemap: true,
      },
    ],
    // create separate chunks for all modules using the original module names as file names
    preserveModules: true,
    // these packages should be handled as peer dependencies
    external: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-slick',
      'styled-components',
      'enzyme',
    ],
    plugins: [
      // remove bundle files on build
      cleaner({
        targets: ['./dist/'],
        silent: true,
      }),
      // Allows node_modules resolution
      resolve({ extensions, preferBuiltins: true }),
      // components can be imported with @/components/
      alias({
        '@': __dirname + '/src',
      }),
      // Convert CommonJS modules to ES6, so they can be included in a Rollup bundle
      commonjs({
        include: 'node_modules/**',
        // https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
        namedExports: {
          'node_modules/react/index.js': ['createElement'],
          'node_modules/react-dom/index.js': ['render'],
          'node_modules/react-is/index.js': ['isElement', 'isValidElementType', 'ForwardRef'],
          'node_modules/styled-components': ['stream'],
          'node_modules/@material/react-layout-grid/dist/index.js': ['Grid'],
          'node_modules/body-scroll-lock/lib/bodyScrollLock.min.js': [
            'disableBodyScroll',
            'clearAllBodyScrollLocks',
          ],
        },
      }),
      // babel plugin to convert all src files into our target specified in .browserslistrc
      babel({ extensions, include: ['src/**/*'] }),
      url({
        include: ['**/*.woff', '**/*.woff2'],
        limit: Infinity,
      }),
      // import svg's
      svgr(),
      // print info about bundle sizes
      filesize(),
      // print progress while building
      progress({ clearLine: true }),
      // generate stats file on build
      visualizer({
        filename: './bundleStats.html',
        title: 'Bundle Stats',
      }),
      // minify code on prod build
      isProduction && terser(),
    ],
  },
]
