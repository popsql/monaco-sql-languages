# @popsql/monaco-sql-languages example

This folder holds an example of how you could integrate the `@popsql/monaco-sql-languages` module
with `monaco-editor`. It was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

The editor is mounted directly via `monaco.editor.create` rather than through a React wrapper
library. Note that monaco-editor 0.56 serves its ESM entry points through the package `exports`
map, so the import specifier is `monaco-editor/editor/editor.api` — the older
`monaco-editor/esm/vs/editor/editor.api` path no longer resolves.

## Getting Started

Before using this example, you will need to build the outer project:

```bash
cd ../
yarn
yarn build
```

Then, you can install the necessary dependencies in this folder:

```bash
yarn
```

## Running the example

To run the example, use:

```bash
yarn start
```

and this should open the example at [http://localhost:4000](http://localhost:4000).
