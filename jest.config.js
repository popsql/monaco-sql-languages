/** @type {import('jest').Config} */
module.exports = {
  moduleNameMapper: {
    "monaco-editor": "<rootDir>/node_modules/monaco-editor/esm/vs/editor/editor.api.js"
  },
  setupFilesAfterEnv: ["<rootDir>/test/mocks.ts"],
  testEnvironment: "jsdom",
  transform: {
    "\\.(js|jsx|ts|tsx)$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
  },
  transformIgnorePatterns: [
    "node_modules/(?!(monaco-editor)/)"
  ],
};
