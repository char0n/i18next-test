'use strict';

const { exec } = require('child_process');
const path = require('path');
const { isNonEmptyString } = require('ramda-adjunct');
const glob = require('glob');


const cwd = path.join(__dirname, '..', '..', '..');


glob(path.join(__dirname, '..', '..', 'locales/**/*.po'), (err, files) => {
  files.forEach((file) => {
    exec(`npx validate-po --src ${file}`, { cwd }, (error, stdout, stderr) => {
      if (isNonEmptyString(stdout)) {
        console.error('Invalid PO locale file detected:');
        console.error(stdout);
        process.exit(1);
      }
    });
  })
});
