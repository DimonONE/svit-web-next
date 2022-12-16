import {initReactI18next} from 'react-i18next';

import i18n from 'i18next';

import en from './en.json';
import ukr from './ukr.json';

const resources = {
  en: {
    translation: en,
  },
  ukr: {
    translation: ukr,
  },
};

i18n.use(initReactI18next).init({
  resources,

  lng: 'ukr',
  fallbackLng: 'ukr',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
