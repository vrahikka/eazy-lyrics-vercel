'use client';

import LinkedIn from '@/public/images/Linkedin';
import Mail from '@/public/images/Mail';
import { useLoggedInStore } from '@/src/store';
import Link from 'next/link';

function Footer() {
  const isLogged = useLoggedInStore((state) => state.loggedIn);

  const href = isLogged ? '/logout' : '/login';

  return (
    <footer
      className="flex flex-col gap-4 items-center justify-center w-full p-8 relative"
      style={{
        background:
          'linear-gradient(240deg, rgba(50, 50, 50, 0.70) 0%, rgba(66, 66, 66, 0.50) 100%)',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
      }}
    >
      <div className="flex gap-4">
        <Link
          href="http://www.linkedin.com/in/ville-rahikka-728707b1"
          target="_blank"
          rel="noreferrer"
          className="text-gray"
          aria-label="Mail"
        >
          <LinkedIn />
        </Link>
        <Link
          href="mailto:ville.a.rahikka@gmail.com"
          className="text-gray"
          aria-label="Contact"
        >
          <Mail />
        </Link>
      </div>
      <div className="flex gap-4">
        <Link href="/" className="text-gray" aria-label="Home">
          Home
        </Link>
        <Link href="/favorites" className="text-gray" aria-label="Favorites">
          Favorites
        </Link>
        <Link href={href} className="text-gray" aria-label="Login">
          Login
        </Link>
      </div>
      <p className="text-xs">©2023 Ville Rahikka. All rights reserved.</p>
    </footer>
  );
}
export default Footer;
