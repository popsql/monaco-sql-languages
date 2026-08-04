module.exports = {
  plugins: [
    // monaco-editor 0.56 locates its web workers with
    // `new URL('...', import.meta.url)`. Jest transforms these files to CJS,
    // where `import.meta` is a syntax error, so the whole editor.api import chain
    // fails to load. This rewrites it to a `require`-based equivalent, which is
    // enough for tests: they only tokenize strings and never start a worker.
    'babel-plugin-transform-import-meta',
  ],
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
};
