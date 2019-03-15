'use strict';


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
    lngs: ['dev'],
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
};
