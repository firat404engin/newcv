import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
import { JetBrains_Mono } from 'next/font/google';
import { Metadata } from 'next';
import { defaultLocale } from '../lib/i18n';
import React from 'react';
import ThemeProvider from './components/ThemeProvider';
import Header from './components/Header';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Software Engineer Portfolio | Creative & Technical',
  description: 'Full-stack developer specialized in modern web technologies, building intuitive and performant applications with creative interfaces.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Software Engineer Portfolio | Creative & Technical',
    description: 'Full-stack developer specialized in modern web technologies, building intuitive and performant applications with creative interfaces.',
    url: 'https://your-portfolio-url.com',
    siteName: 'Developer Portfolio',
    images: [
      {
        url: 'https://your-portfolio-url.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Developer Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning className="dark">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans min-h-screen bg-dark selection:bg-primary-500/30 selection:text-white`}>
        <ThemeProvider>
          <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none z-[-1]"></div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 