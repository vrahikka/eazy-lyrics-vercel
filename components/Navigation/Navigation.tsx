import Logo from '@/public/images/Logo';
import Link from 'next/link';
import FavoriteLinkButton from '@/components/Favorites/FavoriteLinkButton/FavoriteLinkButton';
import LoginButton from '@/components/LoginLogoutSingUp/LoginButton';
import Search from '../Search/Search';

function Navigation() {
  return (
    <nav
      style={{
        gridTemplateAreas: '"logo extra" "search search"',
      }}
      className="w-full md:flex md:justify-between md:gap-8 p-2 md:h-[5rem] [display:grid] grid-rows-[4rem_4rem] justify-items-start grid-cols-[2fr_1fr]  items-center  bg-dark text-white sticky top-0 z-10"
    >
      <Link
        href="/"
        className="text-4xl flex flex-shrink-0 [grid-area:logo]"
        aria-label="Main page"
      >
        <div className="flex items-center gap-4 uppercase">
          <Logo className="w-full max-w-[12rem] h-fit" />
        </div>
      </Link>
      <Search />
      <div className="flex gap-4 justify-self-end [grid-area:extra]">
        <FavoriteLinkButton />
        <LoginButton />
      </div>
    </nav>
  );
}
export default Navigation;
