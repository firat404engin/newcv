import React from 'react';
import { getDictionary, Locale, locales } from '../../lib/i18n';

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dict = getDictionary(params.lang);
  
  return (
    <>
      {children}
    </>
  );
} 