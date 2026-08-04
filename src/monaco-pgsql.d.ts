// monaco-editor ships no type declarations for its monarch language definitions,
// so declare the shape we consume. The specifier must match the import in
// src/pgsql/pgsql.ts exactly: TypeScript is configured with
// `moduleResolution: node`, which ignores `exports` maps, so this declaration is
// also what lets that import typecheck at all.
declare module 'monaco-editor/languages/definitions/pgsql/pgsql.js' {
  export const conf: import('monaco-editor').languages.LanguageConfiguration;
  export const language: import('monaco-editor').languages.IMonarchLanguage;
}
