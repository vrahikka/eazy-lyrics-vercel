'use client';

import HeartIcon from '@/public/images/HeartIcon';
import { useIsLoggedIn } from '@/src/hooks';
import Link from 'next/link';

function FavoriteLinkButton() {
  const isLogged = useIsLoggedIn();

  return (
    <>
      <Link href="/favorites" aria-label="Favorite songs">
        <HeartIcon
          width={30}
          height={30}
          fill={isLogged ? 'primary' : 'gray'}
          className={`hover:fill-button-hoverBackgroundPrimary ${
            isLogged ? 'fill-primary' : 'fill-gray'
          }`}
        />
      </Link>
    </>
  );
}
export default FavoriteLinkButton;
