// monaco-editor 0.56 builds its icon stylesheet through `CSS.escape`, which jsdom
// does not implement. Without it, `setMonarchTokensProvider` throws before any
// tokenization happens. The real escaping rules don't matter here (nothing
// asserts on CSS), so a minimal identifier escape is enough.
Object.defineProperty(window, 'CSS', {
  value: {
    escape: (value: string) =>
      String(value).replace(/[^\w-]/g, (c) => `\\${c}`),
  },
  writable: true,
});

Object.defineProperty(window, 'matchMedia', {
  value: jest.fn().mockImplementation((query) => ({
    // Deprecated
    addEventListener: jest.fn(),

    addListener: jest.fn(),

    dispatchEvent: jest.fn(),

    matches: false,
    media: query,

    onchange: null,

    removeEventListener: jest.fn(),
    // Deprecated
    removeListener: jest.fn(),
  })),
  writable: true,
});
