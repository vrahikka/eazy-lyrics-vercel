import { useEffect, useState } from 'react';
import {
  onAuthStateChange,
  subscribeToFavoriteSongChanges,
  unSubscribeToFavoriteSongChanges,
} from '@/_api/supabase_client';

export const useIsLoggedIn = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    onAuthStateChange((event, session) => {
      switch (event) {
        case 'INITIAL_SESSION':
          setIsLogged(!!session);
          break;
        case 'SIGNED_IN':
          setIsLogged(true);
          break;
        case 'SIGNED_OUT':
          setIsLogged(false);
          break;
        default:
          break;
      }
    });
  }, []);

  return isLogged;
};

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
