'use client';

import LoggedInStatusUpdater from '@/components/LoggedInStatusUpdater/LoggedInStatusUpdater';
import AvatarIcon from '@/public/images/AvatarIcon';
import { useLoggedInStore } from '@/src/store';
import Link from 'next/link';

function LoginButton() {
  const isLogged = useLoggedInStore((state) => state.loggedIn);

  const href = isLogged ? '/logout' : '/login';

  return (
    <>
      <LoggedInStatusUpdater />
      <Link href={href} aria-label="Login">
        <AvatarIcon
          width={30}
          height={30}
          fill={isLogged ? 'white' : 'gray'}
          className="hover:fill-button-hoverBackgroundGray "
        />
      </Link>
    </>
  );
}
export default LoginButton;
