import type { LanguageDefinition } from '../types.js';

export const pgsqlLanguageDefinition: LanguageDefinition = {
  aliases: ['PostgreSQL', 'postgres', 'pg', 'postgre'],
  extensions: [],
  id: 'pgsql',
  loader: () => import('./pgsql.js'),
};
