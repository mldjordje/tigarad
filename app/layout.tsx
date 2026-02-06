import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-fraunces',
  display: 'swap'
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Tigar AD Pirot | Gumena obuca, tehnicka guma i hemijski proizvodi',
  description:
    'Proizvodnja gumene obuce, tehnicke gume i hemijskih proizvoda. Jedan landing za B2C prodaju i B2B upite.',
  keywords: [
    'gumena obuca',
    'proizvodjac gumene obuce',
    'gumene cipele',
    'gumene cizme',
    'Tigar AD',
    'Pirot'
  ],
  openGraph: {
    title: 'Tigar AD Pirot | Proizvodnja gumene obuce',
    description: 'Industrijska proizvodnja gumene obuce, tehnicke gume i hemijskih proizvoda.',
    type: 'website',
    locale: 'sr_RS'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr" className="no-js">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.remove('no-js');document.documentElement.classList.add('js');"
          }}
        />
      </head>
      <body className={`${manrope.variable} ${fraunces.variable}`}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
