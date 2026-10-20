import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import vi from './locales/vi.json';
import en from './locales/en.json';
import ko from './locales/ko.json';
import ja from './locales/ja.json';
import zh from './locales/zh.json';

const resources = {
  vi,
  en,
  ko,
  ja,
  zh,
};

export const NAMESPACES = [
  'common',
  'header',
  'footer',
  'sidebar',
  'auth',
  'booking',
  'movie',
  'discovery',
  'profile',
  'feedback',
  'home',
] as const;

export type AppNamespace = (typeof NAMESPACES)[number];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'vi',
    defaultNS: 'common',
    ns: [...NAMESPACES],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
