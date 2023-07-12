'use client';

import AvatarIcon from '@/public/images/AvatarIcon';
import { useIsLoggedIn } from '@/src/hooks';
import Link from 'next/link';

function LoginButton() {
  const isLogged = useIsLoggedIn();

  const href = isLogged ? '/logout' : '/login';

  return (
    <Link href={href} aria-label="Login">
      <AvatarIcon
        width={30}
        height={30}
        fill={isLogged ? 'white' : 'gray'}
        className="hover:fill-button-hoverBackgroundGray "
      />
    </Link>
  );
}
export default LoginButton;
