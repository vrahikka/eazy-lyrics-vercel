import { createBrowserClient as supabaseCreateBrowserClient } from '@supabase/ssr';
import {
  AuthChangeEvent,
  RealtimeChannel,
  Session,
} from '@supabase/supabase-js';
import { SONG_ID_COLUMN, TABLE_ID } from './utils';

export function getBrowserClient() {
  return supabaseCreateBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export const subscribeToFavoriteSongChanges = (
  songId: number,
  callback: (isFavorite: boolean) => void
) => {
  const channel = getBrowserClient()
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
  getBrowserClient().removeChannel(channel);

export const onAuthStateChange = (
  callBack: (event: AuthChangeEvent, session: Session | null) => void
) => {
  getBrowserClient().auth.onAuthStateChange(callBack);
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
  const supabase = getBrowserClient();
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
  const supabase = getBrowserClient();
  const { error } = await supabase
    .from(TABLE_ID)
    .delete()
    .eq(SONG_ID_COLUMN, id);

  if (error) {
    console.error(error.message);
  }
};

export const getUserDataClient = async () => {
  const supabase = getBrowserClient();
  const user = await supabase.auth.getUser();
  return user;
};

export async function loginClient({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = getBrowserClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email,
    password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error);
    return { error };
  }

  return { error: null };
}

export async function logoutClient() {
  const supabase = getBrowserClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
    return { error };
  }

  return { error: null };
}
