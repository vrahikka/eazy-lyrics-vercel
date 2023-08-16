import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import type { Database } from '@/src/lib/database.types';

const supabase = createClientComponentClient<Database>();

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
    const { error } = await supabase.from('favorite_song_id').insert([
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
    .from('favorite_song_id')
    .delete()
    .eq('song_id', id);

  if (error) {
    console.error(error.message);
  }
};

export const queryFavoriteSongByIdClient = async (id: number) =>
  supabase.from('favorite_song_id').select().eq('song_id', id);

export const queryFavoriteSongsClient = async () =>
  supabase.from('favorite_song_id').select('*');
