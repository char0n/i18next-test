'use strict';

const path = require('path');
const glob = require('glob');
const { exec } = require('child_process');


const cwd = path.join(__dirname, '..', '..', '..');


glob(path.join(__dirname, '..', '..', 'locales/**/*.po'), (err, files) => {
  files.forEach((filePath) => {
    const language = filePath.match(/locales\/([a-z]{2}-[A-Z]{2})\//)[1];
    const fileDir = path.dirname(filePath);
    const fileName = path.basename(filePath, '.po');
    const outFilepath = path.join(fileDir, `${fileName}.json`);

    exec(
      `npx i18next-conv --project ssc-ui-core -l ${language} -s ${filePath} -t ${outFilepath}`,
      { cwd },
    )
  });
});