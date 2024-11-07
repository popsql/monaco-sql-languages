import { testTokenization } from '../../test/testRunner';

import { prestoLanguageDefinition } from './presto.contribution';

testTokenization('presto', prestoLanguageDefinition, [
  // Comments
  [
    {
      line: '-- a comment',
      tokens: [{ startIndex: 0, type: 'comment.sql' }],
    },
  ],

  [
    {
      line: '---sticky -- comment',
      tokens: [{ startIndex: 0, type: 'comment.sql' }],
    },
  ],

  [
    {
      line: '-almost a comment',
      tokens: [
        { startIndex: 0, type: 'operator.sql' },
        { startIndex: 1, type: 'identifier.sql' },
        { startIndex: 7, type: 'white.sql' },
        { startIndex: 8, type: 'identifier.sql' },
        { startIndex: 9, type: 'white.sql' },
        { startIndex: 10, type: 'identifier.sql' },
      ],
    },
  ],

  [
    {
      line: '/* a full line comment */',
      tokens: [
        { startIndex: 0, type: 'comment.quote.sql' },
        { startIndex: 2, type: 'comment.sql' },
        { startIndex: 23, type: 'comment.quote.sql' },
      ],
    },
  ],

  [
    {
      line: '/* /// *** /// */',
      tokens: [
        { startIndex: 0, type: 'comment.quote.sql' },
        { startIndex: 2, type: 'comment.sql' },
        { startIndex: 15, type: 'comment.quote.sql' },
      ],
    },
  ],

  // Numbers
  [
    {
      line: '123',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '-123',
      tokens: [
        { startIndex: 0, type: 'operator.sql' },
        { startIndex: 1, type: 'number.sql' },
      ],
    },
  ],

  [
    {
      line: '0xaBc123',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '0XaBc123',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '0x',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '0x0',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '0xAB_CD',
      tokens: [
        { startIndex: 0, type: 'number.sql' },
        { startIndex: 4, type: 'identifier.sql' },
      ],
    },
  ],

  [
    {
      line: '$',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '$-123',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '$-+-123',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '$123.5678',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '$0.99',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '$.99',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '$99.',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '$0.',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '$.0',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '.',
      tokens: [{ startIndex: 0, type: 'delimiter.sql' }],
    },
  ],

  [
    {
      line: '123',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '123.5678',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '0.99',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '.99',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '99.',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '0.',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '.0',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '1E-2',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '1E+2',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '1E2',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '0.1E2',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '1.E2',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  [
    {
      line: '.1E2',
      tokens: [{ startIndex: 0, type: 'number.sql' }],
    },
  ],

  // Identifiers
  [
    {
      line: '_abc$01',
      tokens: [{ startIndex: 0, type: 'identifier.sql' }],
    },
  ],

  [
    {
      line: '#abc$01',
      tokens: [{ startIndex: 0, type: 'identifier.sql' }],
    },
  ],

  [
    {
      line: '##abc$01',
      tokens: [{ startIndex: 0, type: 'identifier.sql' }],
    },
  ],

  [
    {
      line: '@abc$01',
      tokens: [{ startIndex: 0, type: 'identifier.sql' }],
    },
  ],

  [
    {
      line: '@@abc$01',
      tokens: [{ startIndex: 0, type: 'identifier.sql' }],
    },
  ],

  [
    {
      line: '$abc',
      tokens: [{ startIndex: 0, type: 'identifier.sql' }],
    },
  ],

  [
    {
      line: '$nonexistent',
      tokens: [{ startIndex: 0, type: 'identifier.sql' }],
    },
  ],

  [
    {
      line: '@@nonexistent',
      tokens: [{ startIndex: 0, type: 'identifier.sql' }],
    },
  ],

  [
    {
      line: '"abc"" 321 "" xyz"',
      tokens: [
        { startIndex: 0, type: 'identifier.quote.sql' },
        { startIndex: 1, type: 'identifier.sql' },
        { startIndex: 17, type: 'identifier.quote.sql' },
      ],
    },
  ],

  [
    {
      line: '"abc',
      tokens: [
        { startIndex: 0, type: 'identifier.quote.sql' },
        { startIndex: 1, type: 'identifier.sql' },
      ],
    },
  ],

  [
    {
      line: '"abc"" 321 "" xyz"',
      tokens: [
        { startIndex: 0, type: 'identifier.quote.sql' },
        { startIndex: 1, type: 'identifier.sql' },
        { startIndex: 17, type: 'identifier.quote.sql' },
      ],
    },
  ],

  [
    {
      line: '"abc',
      tokens: [
        { startIndex: 0, type: 'identifier.quote.sql' },
        { startIndex: 1, type: 'identifier.sql' },
      ],
    },
  ],

  [
    {
      line: 'false',
      tokens: [{ startIndex: 0, type: 'keyword.sql' }],
    },
  ],

  [
    {
      line: '"false"',
      tokens: [
        { startIndex: 0, type: 'identifier.quote.sql' },
        { startIndex: 1, type: 'identifier.sql' },
        { startIndex: 6, type: 'identifier.quote.sql' },
      ],
    },
  ],

  // Strings
  [
    {
      line: "'a '' string with quotes'",
      tokens: [{ startIndex: 0, type: 'string.sql' }],
    },
  ],

  [
    {
      line: "'a -- string with comment'",
      tokens: [{ startIndex: 0, type: 'string.sql' }],
    },
  ],

  [
    {
      line: "'a endless string",
      tokens: [{ startIndex: 0, type: 'string.sql' }],
    },
  ],

  // Operators
  [
    {
      line: 'x=x+1',
      tokens: [
        { startIndex: 0, type: 'identifier.sql' },
        { startIndex: 1, type: 'operator.sql' },
        { startIndex: 2, type: 'identifier.sql' },
        { startIndex: 3, type: 'operator.sql' },
        { startIndex: 4, type: 'number.sql' },
      ],
    },
  ],

  [
    {
      line: '_x^=_x',
      tokens: [
        { startIndex: 0, type: 'identifier.sql' },
        { startIndex: 2, type: 'operator.sql' },
        { startIndex: 4, type: 'identifier.sql' },
      ],
    },
  ],

  [
    {
      line: 'WHERE x IS NOT NULL',
      tokens: [
        { startIndex: 0, type: 'keyword.sql' },
        { startIndex: 5, type: 'white.sql' },
        { startIndex: 6, type: 'identifier.sql' },
        { startIndex: 7, type: 'white.sql' },
        { startIndex: 8, type: 'operator.sql' },
        { startIndex: 10, type: 'white.sql' },
        { startIndex: 11, type: 'operator.sql' },
        { startIndex: 14, type: 'white.sql' },
        { startIndex: 15, type: 'operator.sql' },
      ],
    },
  ],

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
