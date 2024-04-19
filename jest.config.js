/** @type {import('jest').Config} */
module.exports = {
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^monaco-editor$':
      '<rootDir>/node_modules/monaco-editor/esm/vs/editor/editor.api.js',
    'monaco-editor/(.*)': '<rootDir>/node_modules/monaco-editor/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/test/mocks.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/example',
    '<rootDir>/lib',
  ],
  transform: {
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
    '.+\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(monaco-editor)/)'],
};
