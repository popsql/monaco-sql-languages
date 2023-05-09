import { beforeAll, describe, expect, test } from '@jest/globals';
import * as monaco from 'monaco-editor';

import { LanguageDefinition } from '../src/types';

export interface IRelaxedToken {
  startIndex: number;
  type: string;
}

export interface ITestItem {
  line: string;
  tokens: IRelaxedToken[];
}

function timeout(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function testTokenization(
  languageId: string,
  languageDefinition: LanguageDefinition,
  testItems: ITestItem[][],
): void {
  describe(`${languageId} tokenization`, () => {
    // ensure that the language has been loaded
    beforeAll(async () => {
      monaco.languages.register(languageDefinition);
      await new Promise<void>((resolve) => {
        languageDefinition.loader().then((mod) => {
          monaco.languages.setMonarchTokensProvider(languageId, mod.language);
          resolve();
        });
      });
      await timeout(0);
    });
    // Trying to use test.each, it unwinds multiple levels of arrays, so we use
    // forEach instead
    testItems.forEach((testItem, idx) => {
      test(`${idx}`, () => {
        const text = testItem.map((t) => t.line).join('\n');
        const actualTokens = monaco.editor.tokenize(text, languageId);
        const actual = actualTokens.map((lineTokens, index) => {
          return {
            line: testItem[index].line,
            tokens: lineTokens.map((t) => {
              return {
                startIndex: t.offset,
                type: t.type,
              };
            }),
          };
        });
        expect(actual).toEqual(testItem);
      });
    });
  });
}
