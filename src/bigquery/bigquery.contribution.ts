import type { LanguageDefinition } from '../types.js';

export const bigqueryLanguageDefinition: LanguageDefinition = {
  aliases: ['BigQuery', 'bigquery'],
  extensions: [],
  id: 'bigquery',
  loader: () => import('./bigquery.js'),
};
