import { useEffect, useState } from 'react';
import {
  subscribeToFavoriteSongChanges,
  unSubscribeToFavoriteSongChanges,
} from '@/_api/supabase_client';

export const useIsFavorite = (songId: number | null, initState: boolean) => {
  const [isFavorite, setIsFavorite] = useState(initState);

  useEffect(() => {
    if (songId !== null) {
      const channel = subscribeToFavoriteSongChanges(songId, setIsFavorite);

      return () => {
        unSubscribeToFavoriteSongChanges(channel);
      };
    }
    return () => {};
  }, [songId]);

  return isFavorite;
};
