import type { LanguageDefinition } from '../types';

export const prestoLanguageDefinition: LanguageDefinition = {
  aliases: ['Presto'],
  extensions: [],
  id: 'presto',
  loader: () => import('./presto.js'),
};
