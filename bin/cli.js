#!/usr/bin/env node

const program = require('commander');
const version = require('../package.json').version;
const ppout = require('../');

program
  .version(version)
  .command('export <file>')
  .option('-p, --pretty', 'Pretty')
  .action((file, cmd) => {
    if (!file) {
      console.error('Please provide a path to a file');
      process.exit(1);
    }
    console.log(ppout(file, cmd.pretty));
  });

program.parse(process.argv);
