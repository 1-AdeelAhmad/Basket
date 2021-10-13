import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
};
export default config;

module.exports = {
  roots: [
    '<rootDir>'
  ],
  transform: {
    '.*\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 52,
      lines: 65,
      statements: 20
    }
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/index.tsx',
  ],
  coverageReporters: [
    'text',
    'html'
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.ts",
    '@testing-library/jest-dom/extend-expect',
  ]
};