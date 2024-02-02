import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import arTranslation from './ar.json';
import enTranslation from './en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        translation: arTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
    lng: 'ar', // Set the default language here
    fallbackLng: 'ar', // Set the fallback language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;