'use strict';

const fs = require('fs');
const path = require('path');
const glob = require('glob');


glob(path.join(__dirname, '..', '..', 'locales/**/*.json'), (err, files) => {
  files.forEach((file) => {
    try {
      JSON.parse(fs.readFileSync(file).toString('utf-8'));
    } catch (e) {
      console.error('Invalid JSON locale file detected:');
      console.error(file);
      console.error(e.toString());
      process.exit(1);
    }
  })
});
