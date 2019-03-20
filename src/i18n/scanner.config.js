'use strict';

const fs = require('fs');
const eol = require('eol');
const path = require('path');
const VirtualFile = require('vinyl');


function flush(done) {
  const { parser } = this;
  const { options } = parser;

  // Flush to resource store
  const resStore = parser.get({ sort: options.sort });
  const { jsonIndent } = options.resource;
  const lineEnding = String(options.resource.lineEnding).toLowerCase();

  Object.keys(resStore).forEach((lng) => {
    const namespaces = resStore[lng];

    Object.keys(namespaces).forEach((ns) => {
      const resPath = parser.formatResourceSavePath(lng, ns);
      let resContent;
      try {
        resContent = JSON.parse(
          fs.readFileSync(
            fs.realpathSync(path.join('src', 'locales', resPath))
          ).toString('utf-8')
        );
      } catch (e) {
        resContent = {};
      }
      const obj = { ...namespaces[ns], ...resContent };
      let text = JSON.stringify(obj, null, jsonIndent) + '\n';

      if (lineEnding === 'auto') {
        text = eol.auto(text);
      } else if (lineEnding === '\r\n' || lineEnding === 'crlf') {
        text = eol.crlf(text);
      } else if (lineEnding === '\n' || lineEnding === 'lf') {
        text = eol.lf(text);
      } else if (lineEnding === '\r' || lineEnding === 'cr') {
        text = eol.cr(text);
      } else { // Defaults to LF
        text = eol.lf(text);
      }

      let contents = null;

      try {
        // "Buffer.from(string[, encoding])" is added in Node.js v5.10.0
        contents = Buffer.from(text);
      } catch (e) {
        // Fallback to "new Buffer(string[, encoding])" which is deprecated since Node.js v6.0.0
        contents = new Buffer(text);
      }

      this.push(new VirtualFile({
        path: resPath,
        contents: contents
      }));
    });
  });

  done();
}


module.exports = {
  input: [
    'src/**/*.{js,jsx}',
    // Use ! to filter out files or directories
    '!src/i18n/**',
    '!src/locales',
    '!**/node_modules/**',
  ],
  output: 'src/locales',
  options: {
    debug: true,
    removeUnusedKeys: false,
    sort: false,
    attr: {
      list: ['data-i18n'],
      extensions: ['.html', '.htm']
    },
    func: {
      list: ['_', '__'],
      extensions: ['.js', '.jsx']
    },
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      defaultsKey: 'defaults',
      extensions: ['.js', '.jsx'],
      fallbackKey: (ns, value) => value,
    },
    lngs: ['dev', 'cs-CZ', 'en-US'],
    ns: ['feature1', 'translation'],
    defaultLng: 'dev',
    defaultNs: 'translation',
    defaultValue: (lng, ns, key) => {
      if (lng === 'dev') {
        return key;
      }
      return '__NOT_TRANSLATED__';
    },
    resource: {
      loadPath: '{{lng}}/{{ns}}.json',
      savePath: '{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n'
    },
    nsSeparator: ':',
    keySeparator: '.',
    pluralSeparator: '_',
    contextSeparator: '_',
    interpolation: {
      prefix: '{{',
      suffix: '}}'
    }
  },
  flush,
};
