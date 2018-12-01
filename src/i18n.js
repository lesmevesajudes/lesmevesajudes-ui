import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import {reactI18nextModule} from 'react-i18next';

const {homepage} = require('../package.json');

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'ca-ES',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    debug: true,

    interpolation: {
      escapeValue: false // not needed for react!!
    },
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: homepage + '/locales/{{lng}}/{{ns}}.json'
    },
    react: {
      wait: true
    }
  });

export default i18n;
