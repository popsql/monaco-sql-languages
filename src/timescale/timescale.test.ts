import { testTokenization } from '../../test/testRunner';

import { timescaleLanguageDefinition } from './timescale.contribution';

// Given timescale is an extension of the base pgsql language, just a simple test
// to ensure it generally works, otherwise just rely on the pgsql tests to function.

testTokenization('timescale', timescaleLanguageDefinition, [
  [
    {
      line: 'SELECT * FROM sch.MyTable WHERE MyColumn IN (1,2)',
      tokens: [
        { startIndex: 0, type: 'keyword.sql' },
        { startIndex: 6, type: 'white.sql' },
        { startIndex: 7, type: 'operator.sql' },
        { startIndex: 8, type: 'white.sql' },
        { startIndex: 9, type: 'keyword.sql' },
        { startIndex: 13, type: 'white.sql' },
        { startIndex: 14, type: 'identifier.sql' },
        { startIndex: 17, type: 'delimiter.sql' },
        { startIndex: 18, type: 'identifier.sql' },
        { startIndex: 25, type: 'white.sql' },
        { startIndex: 26, type: 'keyword.sql' },
        { startIndex: 31, type: 'white.sql' },
        { startIndex: 32, type: 'identifier.sql' },
        { startIndex: 40, type: 'white.sql' },
        { startIndex: 41, type: 'operator.sql' },
        { startIndex: 43, type: 'white.sql' },
        { startIndex: 44, type: 'delimiter.parenthesis.sql' },
        { startIndex: 45, type: 'number.sql' },
        { startIndex: 46, type: 'delimiter.sql' },
        { startIndex: 47, type: 'number.sql' },
        { startIndex: 48, type: 'delimiter.parenthesis.sql' },
      ],
    },
  ],
]);
