/** @type {import('jest').Config} */
module.exports = {
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^monaco-editor$':
      '<rootDir>/node_modules/monaco-editor/esm/vs/editor/editor.api.js',
    // Mirror monaco-editor 0.56's exports map, which resolves
    // `monaco-editor/<path>` to `esm/vs/<path>`. Jest does not consult `exports`,
    // so deep imports have to be rewritten here to match what bundlers and Node
    // do for consumers. Keep this above the generic rule below, which stays for
    // paths that are already `esm/...` (`transformIgnorePatterns` relies on it).
    '^monaco-editor/((?!esm/|min/|dev/).*)$':
      '<rootDir>/node_modules/monaco-editor/esm/vs/$1',
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
