import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import {
  queryFavoriteSongByIdClient,
  queryFavoriteSongsClient,
} from '@/_api/supabase_client';
import { Database, FavoriteRow } from './lib/database.types';

const supabase = createClientComponentClient<Database>();

export const useIsLoggedIn = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
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

export const useIsFavorite = (songId: number | null) => {
  const [isFavorite, setIsFavorite] = useState(false);

  async function getInitData(id: number) {
    try {
      const data = await queryFavoriteSongByIdClient(id ?? 0);
      setIsFavorite((data.data && data.data?.length > 0) ?? false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (songId !== null) {
      getInitData(songId);

      const channel = supabase
        .channel(`is-favorite-${songId}`)
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'favorite_song_id',
          },
          (payload) => {
            if (
              payload.eventType === 'INSERT' &&
              payload.new.song_id === songId
            ) {
              setIsFavorite(true);
            }
            if (
              payload.eventType === 'DELETE' &&
              payload.old.song_id === songId
            ) {
              setIsFavorite(false);
            }
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
    return () => {};
  }, [songId]);

  return isFavorite;
};

export const useGetFavoriteSongs = () => {
  const [favorites, setFavorites] = useState<FavoriteRow[] | null>([]);

  const fetchData = async () => {
    try {
      const query = await queryFavoriteSongsClient();
      if (query.data) {
        setFavorites(query.data as FavoriteRow[]);
      }
    } catch (error) {
      setFavorites(null);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return favorites;
};
