import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

import common_en from './translations/en.json';

i18n.init({
  resources: {
    en: {
      translation: common_en
    },
    // Add translations for other languages here
  },
  lng: 'en', // Set the default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // Allows using HTML in translations
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
