// jest.config.js
module.exports = {
  verbose: true,
  moduleDirectories: ['node_modules', '<rootDir>/src/'],
  testURL: 'http://localhost',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupJestOnEnvInit.ts'],
  setupFiles: [
    '<rootDir>/config/jest/setupTests.ts',
    '<rootDir>/node_modules/regenerator-runtime/runtime',
  ],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$', '<rootDir>/dist/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  coverageReporters: ['text', 'html'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/src/**/*.story.{ts,tsx}',
    '!**/src/**/*.d.ts',
  ],
  modulePathIgnorePatterns: ['<rootDir>/documentation/', '<rootDir>/dist/'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/config/jest-svg-mock.js',
    '@/(.*)': '<rootDir>/src/$1',
    '^webmobile-sc-components$':
      '<rootDir>/node_modules/@excelwithbusiness/webmobile-sc-components/dist/index.js',
    '^@excelwithbusiness/webmobile-sc-components$':
      '<rootDir>/node_modules/@excelwithbusiness/webmobile-sc-components/dist/index.js',
    '^webmobile-svg-library$':
      '<rootDir>/node_modules/@excelwithbusiness/webmobile-svg-library/dist/index.js',
    '^@excelwithbusiness/webmobile-svg-library$':
      '<rootDir>/node_modules/@excelwithbusiness/webmobile-svg-library/dist/index.js',
  },
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 60,
      lines: 72,
      statements: 72,
    },
  },
  globals: {
    APP_ENV: 'test',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'mjs', 'node'],
}
