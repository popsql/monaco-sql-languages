import type { languages } from 'monaco-editor';

export interface LanguageDefinition extends languages.ILanguageExtensionPoint {
  loader: () => Promise<{
    conf: languages.LanguageConfiguration;
    language: languages.IMonarchLanguage;
  }>;
}
