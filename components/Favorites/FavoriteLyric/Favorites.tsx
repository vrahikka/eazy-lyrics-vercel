'use client';

import FavoriteLyric from '@/components/Favorites/FavoriteLyric/FavoriteLyric';
import { useGetFavoriteSongs } from '@/src/hooks';

function Favorites() {
  const favorites = useGetFavoriteSongs();

  let errorText = '';
  if (favorites === null) {
    errorText = 'Sorry. Unable to fetch favorites.';
  } else if (favorites.length === 0) {
    errorText = 'You need to log in to see the favorites.';
  }

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <h2 className="text-center">Favorites</h2>
      {errorText ? (
        <p className="text-gray">{errorText}</p>
      ) : (
        <ul className="w-full gap-4 flex flex-col">
          {favorites?.map((favorite) => (
            <li key={favorite.song_id}>
              <FavoriteLyric favorite={favorite} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Favorites;
