import i18n from 'i18next';
import LngDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import {reactI18nextModule} from 'react-i18next';
import pathTransformLngDetector from './shared/pathTransformLngDetector';

const {homepage} = require('../package.json');
const lngDetector = new LngDetector();
lngDetector.addDetector(pathTransformLngDetector);

const languageDetectorOptions = {
  order: ['pathTransform', 'querystring', 'navigator'],
  lookupFromPathIndex: 0,
  transforms: {'ca': 'ca-ES'},
};

i18n
  .use(Backend)
    .use(lngDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'ca-ES',

    detection: languageDetectorOptions,

    // have a common namespace used around the full app
    ns: ['translations', 'index'],
    defaultNS: 'translations',

    debug: false,

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
