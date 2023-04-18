import '@/styles/globals.css'
import React, { Suspense, useState } from 'react';
import type { AppProps } from 'next/app'
import i18n from '../i18n';
import { useTranslation } from "react-i18next";

export default function App({ Component, pageProps }: AppProps) {
  const [locale, setLocale] = useState(i18n.language);
  function changeLocale () {
    if (locale == 'en') {
      i18n.changeLanguage('fr');
    }
    else {
      i18n.changeLanguage('en');
    }
  }
  i18n.on('languageChanged', (lng) => setLocale(i18n.language));
  return(
    <Suspense>
      <Component {...pageProps} locale={locale} changeLocale={changeLocale} />
    </Suspense>

  ) 
  
}
