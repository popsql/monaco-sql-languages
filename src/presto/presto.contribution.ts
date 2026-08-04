import type { LanguageDefinition } from '../types.js';

export const prestoLanguageDefinition: LanguageDefinition = {
  aliases: ['Presto'],
  extensions: [],
  id: 'presto',
  loader: () => import('./presto.js'),
};
