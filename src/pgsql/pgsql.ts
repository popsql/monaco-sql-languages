// Documented for pg 17

import cloneDeep from 'lodash.clonedeep';
// monaco-editor 0.56 reorganized its ESM tree, moving the monarch language
// definitions from `basic-languages/<lang>/<lang>` to
// `languages/definitions/<lang>/<lang>`, and added an `exports` map. Both parts
// matter here:
//
//   - The exports map is the only supported way in; `monaco-editor/esm/vs/...`
//     specifiers no longer resolve at all, because the map's wildcards rewrite
//     `./<path>` to `./esm/vs/<path>.js`.
//   - Because the mapped target is matched literally, the `.js` suffix is
//     required rather than stylistic. Without it this resolves to a file that
//     does not exist.
import {
  conf as oldConf,
  language as oldLanguage,
} from 'monaco-editor/languages/definitions/pgsql/pgsql.js';

const conf = cloneDeep(oldConf);
const language = cloneDeep(oldLanguage);

language.builtinFunctions.push(
  ...[
    // pg16 functions
    'any_value',
    'array_simple',
    'array_shuffle',
    'date_add',
    'date_substract',
    'erf',
    'erfc',
    'json_agg_strict',
    'json_array',
    'json_arrayagg',
    'json_object_agg_strict',
    'json_object_agg_unique',
    'json_object_agg_unique_strict',
    'json_objectagg',
    'jsonb_agg_strict',
    'jsonb_object_agg_strict',
    'jsonb_object_agg_unique',
    'jsonb_object_agg_unique_strict',
    'pg_input_is_valid',
    'pg_input_error_info',
    'pg_split_walfile_name',
    'random_normal',
    // pg17 functions
    'icu_unicode_version',
    'json',
    'json_exists',
    'json_query',
    'json_scalar',
    'json_serialize',
    'json_table',
    'json_value',
    'pg_basetype',
    'pg_column_toast_chunk_id',
    'pg_sync_replication_slots',
    'to_bin',
    'to_oct',
    'to_regtypemod',
    'unicode_assigned',
    'unicode_version',
    'uuid_extract_timestamp',
    'uuid_extract_version',
    'xmltext',
  ],
);

// Re-sort the list of functions, and remove potential duplicates
language.builtinFunctions = (language.builtinFunctions as string[])
  .sort()
  .filter((x, i, a) => !i || x !== a[i - 1]);

export { conf, language };
