import type { LanguageDefinition } from '../types';

export const clickhouseLanguageDefinition: LanguageDefinition = {
	id: 'clickhouse',
	extensions: [],
	aliases: ['Clickhouse', 'ClickHouse'],
	loader: () => import('./clickhouse.js'),
};
