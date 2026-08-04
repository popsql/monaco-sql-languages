import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';

// monaco spawns its editor web worker itself, and without MonacoEnvironment it
// falls back to loading one from a CDN-style absolute path that does not exist
// here. webpack 5 (via react-scripts 5) bundles the worker from this URL.
window.MonacoEnvironment = {
  getWorker: () =>
    new Worker(
      new URL('monaco-editor/editor/editor.worker.js', import.meta.url),
      { type: 'module' },
    ),
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
