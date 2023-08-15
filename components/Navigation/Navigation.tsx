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
        background:
          'linear-gradient(240deg, rgba(50, 50, 50, 0.70) 0%, rgba(66, 66, 66, 0.50) 100%)',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
      }}
      className="w-full md:flex md:justify-between md:gap-8 p-2 md:h-[5rem] [display:grid] grid-rows-[4rem_4rem] justify-items-start grid-cols-[2fr_1fr]  items-center  bg-dark text-white sticky top-0 z-10"
    >
      <Link
        href="/"
        className="text-4xl flex flex-shrink-0 [grid-area:logo]"
        aria-label="Home"
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
