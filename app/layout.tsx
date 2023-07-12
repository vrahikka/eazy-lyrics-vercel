import './globals.css';
import { twMerge } from 'tailwind-merge';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation/Navigation';

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
        className={twMerge(inter.className, 'h-screen w-screen flex flex-col')}
        suppressHydrationWarning={true}
      >
        <Navigation />
        <div
          className="flex justify-center flex-grow"
          style={{
            backgroundImage: `url(/images/background.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            height: 'auto',
            width: '100vw',
          }}
        >
          <div className="flex flex-col items-center w-full max-w-[90rem] flex-grow flex-shrink md:m-8 m-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
