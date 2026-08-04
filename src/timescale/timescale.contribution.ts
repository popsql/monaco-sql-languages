import type { LanguageDefinition } from '../types';

export const timescaleLanguageDefinition: LanguageDefinition = {
  aliases: ['Timescale'],
  extensions: [],
  id: 'timescale',
  loader: () => import('./timescale.js'),
};
