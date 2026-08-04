import type { LanguageDefinition } from '../types.js';

export const clickhouseLanguageDefinition: LanguageDefinition = {
  aliases: ['Clickhouse', 'ClickHouse'],
  extensions: [],
  id: 'clickhouse',
  loader: () => import('./clickhouse.js'),
};
