import type { LanguageDefinition } from '../types';

export const bigqueryLanguageDefinition: LanguageDefinition = {
	id: 'bigquery',
	extensions: [],
	aliases: ['BigQuery', 'bigquery'],
	loader: () => import('./bigquery'),
};
