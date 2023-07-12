import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { twMerge } from 'tailwind-merge';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation/Navigation';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Eazy Lyrics',
  description: 'Easy lyrics browser',
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
          'h-screen w-screen flex flex-col items-center'
        )}
        suppressHydrationWarning={true}
      >
        <Navigation />
        <Image
          className="w-full h-full object-cover fixed top-0 left-0 z-[-1]"
          src="/images/background.jpg"
          fill
          alt="Background"
          priority
          quality={100}
          sizes="100vw"
        />
        <div className="flex flex-col items-center w-full max-w-[90rem] flex-grow flex-shrink md:m-8 m-4">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
