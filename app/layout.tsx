import { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { twMerge } from 'tailwind-merge';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation/Navigation';
import Background from '@/components/Background/Background';
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Eazy Lyrics',
    template: '%s | Eazy Lyrics',
  },
  description: 'Easy and simple lyrics browser',
  creator: 'Ville Rahikka',
  keywords: ['Music', 'Lyrics'],
  themeColor: '#A6A6A6',
  robots: {
    index: true,
    follow: false,
    notranslate: true,
  },
  openGraph: {
    title: 'Eazy Lyrics',
    description: 'Easy and simple lyrics browser',
    url: 'https://eazy-lyrics-vercel.vercel.app/',
    siteName: 'EazyLyrics',
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
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          'h-screen w-screen flex flex-col items-center overflow-hidden'
        )}
        suppressHydrationWarning={true}
      >
        <Navigation />
        <Background />
        <div className="flex flex-col items-center w-full h-full fixed md:pt-20 pt-40 overflow-y-auto overflow-x-hidden">
          <div className="flex flex-col items-center w-full max-w-[90rem] flex-grow flex-shrink md:m-8 m-4 px-8">
            {children}
          </div>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
