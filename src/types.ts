import type { languages } from 'monaco-editor';

export interface LanguageDefinition extends languages.ILanguageExtensionPoint {
  loader: () => Promise<{
    language: languages.IMonarchLanguage;
    languageConfiguration: languages.LanguageConfiguration;
  }>;
}
