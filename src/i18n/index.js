import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ICU from "i18next-icu";

import enUSFeature1 from '../locales/en-US/feature1.json';
import enUSTranslation from '../locales/en-US/translation.json';
import csCZFeature1 from '../locales/cs-CZ/feature1.json';
import csCZTranslation from '../locales/cs-CZ/translation.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  'en-US': {
    feature1: enUSFeature1,
    translation: enUSTranslation,
  },
  'cs-CZ': {
    feature1: csCZFeature1,
    translation: csCZTranslation,
  },
};

i18n
  .use(ICU)
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en-US',
    debug: true,
    ns: ['translation', 'feature1'],

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });


export default i18n;
