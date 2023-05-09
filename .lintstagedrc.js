const common = ['prettier --write', 'eslint --fix'];

module.exports = {
  '*.js': common,
  '*.ts': [() => 'tsc -p tsconfig.esm.json --noEmit', ...common],
};
