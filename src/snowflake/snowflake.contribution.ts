import type { LanguageDefinition } from '../types.js';

export const snowflakeLanguageDefinition: LanguageDefinition = {
  aliases: ['Snowflake'],
  extensions: [],
  id: 'snowflake',
  loader: () => import('./snowflake.js'),
};
