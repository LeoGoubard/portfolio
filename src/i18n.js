import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from "../src/translationEN.json";
import translationFR from "../src/translationFR.json";

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)

  if(!i18n.isInitialized) {
    i18n.init({
      resources,
      fallbackLng: 'en',
      debug: true,
  
      interpolation: {
        escapeValue: false,
      }
    });
  }

export default i18n;