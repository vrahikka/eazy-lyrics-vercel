'use client';

import HeartIcon from '@/public/images/HeartIcon';
import { useIsLoggedIn } from '@/src/hooks';
import Link from 'next/link';

function FavoriteLinkButton() {
  const isLogged = useIsLoggedIn();

  return (
    <>
      {isLogged ? (
        <Link href="/favorites" aria-label="Favorite songs">
          <HeartIcon
            width={30}
            height={30}
            fill={'#FF397F'}
            className="hover:fill-button-hoverBackgroundPrimary"
          />
        </Link>
      ) : (
        <HeartIcon width={30} height={30} fill={'gray'} />
      )}
    </>
  );
}
export default FavoriteLinkButton;
