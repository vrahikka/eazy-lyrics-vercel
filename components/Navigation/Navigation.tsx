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
      className="md:flex md:justify-between md:gap-8 gap-2 p-2 md:p-8 [display:grid] grid-rows-[1fr_1fr] justify-items-start grid-cols-[2fr_1fr]  items-center  bg-dark text-white sticky top-0 z-10"
    >
      <Link
        href="/"
        className="text-4xl flex flex-shrink-0 [grid-area:logo]"
        aria-label="Main page"
      >
        <div className="flex items-center gap-4 uppercase">
          <Logo width={200} height={50} />
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
