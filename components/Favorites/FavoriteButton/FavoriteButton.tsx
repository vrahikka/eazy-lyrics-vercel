'use client';

import {
  deleteFavoriteSongClient,
  insertNewFavoriteSongClient,
} from '@/_api/supabase_client';
import HeartIcon from '@/public/images/HeartIcon';
import { useIsFavorite, useIsLoggedIn } from '@/src/hooks';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

interface Props {
  id: number;
  artist: string;
  title: string;
  thumbnailUrl: string;
  initialFavoriteState?: boolean;
  refresh?: boolean;
}

function FavoriteButton({
  id,
  artist,
  title,
  thumbnailUrl,
  initialFavoriteState,
  refresh,
}: Props) {
  const isFavorite = useIsFavorite(id) || !!initialFavoriteState;
  const isLogged = useIsLoggedIn();

  const router = useRouter();

  if (!id) {
    return null;
  }

  const handleAddToFavorites = async (event: MouseEvent) => {
    event.preventDefault();
    if (isFavorite) {
      await deleteFavoriteSongClient(id);
    } else {
      await insertNewFavoriteSongClient({ id, title, artist, thumbnailUrl });
    }
    if (refresh) {
      router.refresh();
    }
  };

  return (
    <>
      {isLogged ? (
        <button onClick={handleAddToFavorites} aria-label="Favorite">
          <HeartIcon
            width={24}
            height={24}
            fill={isFavorite ? '#FF397F' : 'transparent'}
            stroke="#FF397F"
            className="hover:fill-button-hoverBackgroundPrimary"
          />
        </button>
      ) : (
        <HeartIcon width={30} height={30} fill={'gray'} />
      )}
    </>
  );
}
export default FavoriteButton;
