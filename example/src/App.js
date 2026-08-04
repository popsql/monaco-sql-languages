import {
  bigqueryLanguageDefinition,
  clickhouseLanguageDefinition,
  pgsqlLanguageDefinition,
  prestoLanguageDefinition,
  snowflakeLanguageDefinition,
  timescaleLanguageDefinition,
} from '@popsql/monaco-sql-languages';
// monaco-editor 0.56 exposes its ESM entry points through the package `exports`
// map, so `monaco-editor/editor/editor.api` is the supported specifier. The
// pre-0.56 `monaco-editor/esm/vs/editor/editor.api` path now resolves to
// ./esm/vs/esm/vs/... and no longer exists.
import * as monaco from 'monaco-editor/editor/editor.api';
import React, { useEffect, useRef, useState } from 'react';

const languageDefinitions = [
  bigqueryLanguageDefinition,
  clickhouseLanguageDefinition,
  pgsqlLanguageDefinition,
  prestoLanguageDefinition,
  snowflakeLanguageDefinition,
  timescaleLanguageDefinition,
];

const INITIAL_SQL = 'SELECT * FROM table';

// Registration mutates global monaco state, so it must happen exactly once
// rather than on every mount/re-render.
let haveLanguagesBeenRegistered = false;

const registerSqlLanguagesOnce = () => {
  if (haveLanguagesBeenRegistered) {
    return;
  }
  haveLanguagesBeenRegistered = true;

  languageDefinitions.forEach((languageDefinition) => {
    monaco.languages.register(languageDefinition);
    monaco.languages.onLanguage(languageDefinition.id, async () => {
      const { conf, language } = await languageDefinition.loader();
      monaco.languages.setMonarchTokensProvider(
        languageDefinition.id,
        language,
      );
      monaco.languages.setLanguageConfiguration(languageDefinition.id, conf);
    });
  });
};

const sortedLanguageIds = languageDefinitions
  .map(({ id }) => id)
  .sort((a, b) => a.localeCompare(b));

const DEFAULT_LANGUAGE_ID = sortedLanguageIds[0];

const App = () => {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const [selectedLanguageId, setSelectedLanguageId] =
    useState(DEFAULT_LANGUAGE_ID);

  // Create the editor once; language changes are applied to the existing model
  // below so that switching dialects preserves the user's text.
  useEffect(() => {
    registerSqlLanguagesOnce();

    editorRef.current = monaco.editor.create(editorContainerRef.current, {
      automaticLayout: true,
      language: DEFAULT_LANGUAGE_ID,
      minimap: { enabled: false },
      theme: 'vs',
      value: INITIAL_SQL,
    });

    return () => {
      editorRef.current?.getModel()?.dispose();
      editorRef.current?.dispose();
      editorRef.current = null;
    };
  }, []);

  useEffect(() => {
    const model = editorRef.current?.getModel();
    if (model) {
      monaco.editor.setModelLanguage(model, selectedLanguageId);
    }
  }, [selectedLanguageId]);

  return (
    <div>
      <h1>@popsql/monaco-sql-languages</h1>
      <div style={{ marginBottom: 10, marginLeft: 20 }}>
        <select
          value={selectedLanguageId}
          onChange={(event) => setSelectedLanguageId(event.target.value)}
        >
          {sortedLanguageIds.map((languageId) => (
            <option key={languageId} value={languageId}>
              {languageId}
            </option>
          ))}
        </select>
      </div>
      <div
        ref={editorContainerRef}
        style={{ border: '1px solid #ccc', height: 600, marginLeft: 20 }}
      />
    </div>
  );
};

export default App;
