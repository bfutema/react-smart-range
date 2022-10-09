#!/usr/bin/env node

const { exec: childExec } = require('child_process');
const { writeFile } = require('fs/promises');
const { resolve } = require('path');
const { promisify } = require('util');

const packageJson = require('../package.json');

const exec = promisify(childExec);

(async function build() {
  const commands = [
    'rm -rf ./lib',
    'tsc --noEmit false --declaration --outDir ./lib/src/ --emitDeclarationOnly',
    'babel ./src --extensions ".js,.ts,.jsx,.tsx" --out-dir ./lib/src/ --copy-files --no-copy-ignored',
  ];

  await exec(commands.join(' && '));

  await writeFile(
    resolve(__dirname, '..', 'lib', 'package.json'),
    JSON.stringify({
      name: packageJson.name,
      version: packageJson.version,
      dependencies: packageJson.dependencies,
    }, null, 2),
  );
})();
