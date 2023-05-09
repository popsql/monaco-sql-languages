import type { LanguageDefinition } from '../types';

export const clickhouseLanguageDefinition: LanguageDefinition = {
  aliases: ['Clickhouse', 'ClickHouse'],
  extensions: [],
  id: 'clickhouse',
  loader: () => import('./clickhouse.js'),
};
