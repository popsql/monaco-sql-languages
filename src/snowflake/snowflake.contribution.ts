import type { LanguageDefinition } from '../types';

export const snowflakeLanguageDefinition: LanguageDefinition = {
  aliases: ['Snowflake'],
  extensions: [],
  id: 'snowflake',
  loader: () => import('./snowflake.js'),
};
