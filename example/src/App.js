import {
  bigqueryLanguageDefinition,
  clickhouseLanguageDefinition,
  snowflakeLanguageDefinition,
} from '@popsql/monaco-sql-languages';
import React, { useCallback } from 'react';
import MonacoEditor from 'react-monaco-editor';

const App = () => {
  const [code, setCode] = React.useState('SELECT * FROM table');
  const [language, setLanguage] = React.useState('bigquery');
  const [languages, setLanguages] = React.useState([]);

  const editorWillMount = useCallback((monaco) => {
    const newLanguages = [];
    [
      bigqueryLanguageDefinition,
      clickhouseLanguageDefinition,
      snowflakeLanguageDefinition,
    ].forEach((monacoLanguage) => {
      newLanguages.push(monacoLanguage.id);
      monaco.languages.register(monacoLanguage);
      monaco.languages.onLanguage(monacoLanguage.id, () => {
        monacoLanguage.loader().then((mod) => {
          monaco.languages.setMonarchTokensProvider(
            monacoLanguage.id,
            mod.language,
          );
          monaco.languages.setLanguageConfiguration(
            monacoLanguage.id,
            mod.conf,
          );
        });
      });
      setLanguages(newLanguages.sort());
    });
  }, []);

  return (
    <div>
      <h1>@popsql/monaco-sql-languages</h1>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        {languages.map((langauge) => (
          <option key={language}>{langauge}</option>
        ))}
      </select>

      <MonacoEditor
        width="1000"
        height="600"
        language={language}
        theme="vs-light"
        value={code}
        editorWillMount={editorWillMount}
        onChange={(newValue) => setCode(newValue)}
      />
    </div>
  );
};

export default App;
