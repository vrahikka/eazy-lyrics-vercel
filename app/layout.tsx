import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { twMerge } from 'tailwind-merge';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation/Navigation';
import Background from '@/components/Background/Background';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Eazy Lyrics',
  description: 'Easy and simple lyrics browser',
  creator: 'Ville Rahikka',
  themeColor: 'black',
  robots: {
    index: false,
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
        <div className="flex flex-col items-center w-full h-full fixed md:pt-20 pt-40 px-8 overflow-y-auto overflow-x-hidden">
          <div className="flex flex-col items-center w-full max-w-[90rem] flex-grow flex-shrink md:m-8 m-4">
            {children}
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
