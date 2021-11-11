// jest.config.js
module.exports = {
  verbose: true,
  moduleDirectories: ['node_modules', '<rootDir>/src/'],
  testURL: 'http://localhost',
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupJestOnEnvInit.ts'],
  setupFiles: [
    '<rootDir>/config/jest/setupTests.ts',
    '<rootDir>/node_modules/regenerator-runtime/runtime',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\]$',
    '<rootDir>/dist/',
    'node_modules/(?!@matthill8286)',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['<rootDir>/(build|docs|node_modules|node_modules/@matthill8286)/'],
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/documentation/', '<rootDir>/dist/'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/config/jest-svg-mock.js',
    '@/(.*)': '<rootDir>/src/$1',
  },
  globals: {
    APP_ENV: 'test',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'mjs', 'node'],
}
