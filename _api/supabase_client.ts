import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/src/lib/database.types';
import { SONG_ID_COLUMN, TABLE_ID } from './utils';
import {
  AuthChangeEvent,
  RealtimeChannel,
  Session,
} from '@supabase/supabase-js';

const supabase = createClientComponentClient<Database>();

export const subscribeToFavoriteSongChanges = (
  songId: number,
  callback: (isFavorite: boolean) => void
) => {
  const channel = supabase
    .channel(`is-favorite-${songId}`)
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: TABLE_ID,
      },
      (payload) => {
        if (payload.eventType === 'INSERT' && payload.new.song_id === songId) {
          callback(true);
        }
        if (payload.eventType === 'DELETE' && payload.old.song_id === songId) {
          callback(false);
        }
      }
    )
    .subscribe();

  return channel;
};

export const unSubscribeToFavoriteSongChanges = (channel: RealtimeChannel) =>
  supabase.removeChannel(channel);

export const onAuthStateChange = (
  callBack: (event: AuthChangeEvent, session: Session | null) => void
) => {
  supabase.auth.onAuthStateChange(callBack);
};

export const insertNewFavoriteSongClient = async ({
  id,
  title,
  artist,
  thumbnailUrl,
}: {
  id: number;
  title: string;
  artist: string;
  thumbnailUrl: string;
}) => {
  try {
    const user = await supabase.auth.getUser();
    const { error } = await supabase.from(TABLE_ID).insert([
      {
        email: user.data.user?.email,
        song_id: id,
        title,
        artist,
        thumbnail_url: thumbnailUrl,
      },
    ]);

    if (error) {
      console.error(error.message);
    }
  } catch (error) {
    if (error) {
      console.error(error);
    }
  }
};

export const deleteFavoriteSongClient = async (id: number) => {
  const { error } = await supabase
    .from(TABLE_ID)
    .delete()
    .eq(SONG_ID_COLUMN, id);

  if (error) {
    console.error(error.message);
  }
};
