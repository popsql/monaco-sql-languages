# @popsql/monaco-sql-languages

[![CI](https://github.com/popsql/monaco-sql-languages/actions/workflows/ci.yml/badge.svg?branch=main&event=push)](https://github.com/popsql/monaco-sql-languages/actions/workflows/ci.yml)
[![NPM](https://img.shields.io/npm/v/@popsql/monaco-sql-languages)](https://www.npmjs.com/package/@popsql/monaco-sql-languages)

This repo contains a bundle of SQL languages for the
[Monaco Editor](https://microsoft.github.io/monaco-editor/). Currently provided is:

* BigQuery
* Clickhouse
* PostgreSQL (has functions added in newer versions than available in monaco)
* Snowflake
* Timescale

The initial goal of the repo is to provide syntax highlighting for a number of languages.

## Usage

```bash
npm install @popsql/monaco-sql-languages
```

See the [`example/`](example/README.md) folder on integrating this project with react.

## Development

```
yarn
yarn build
yarn test
```

To release a new version, [create a new release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release), and then this will create a release
on NPM using the release name as the version. Additionally, `example/` will be deployed
to the `gh-pages` branch.
