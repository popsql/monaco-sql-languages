/** @type {import('jest').Config} */
module.exports = {
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    "monaco-editor": "<rootDir>/node_modules/monaco-editor/esm/vs/editor/editor.api.js"
  },
  setupFilesAfterEnv: ["<rootDir>/test/mocks.ts"],
  testPathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/example",
    "<rootDir>/lib",
  ],
  testEnvironment: "jsdom",
  transform: {
    ".+\\.[jt]sx?$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
  },
  transformIgnorePatterns: [
    "node_modules/(?!(monaco-editor)/)"
  ],
};
