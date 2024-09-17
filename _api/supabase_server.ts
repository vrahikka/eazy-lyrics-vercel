import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import type { Database, FavoriteRow } from '@/src/lib/database.types';
import { SONG_ID_COLUMN, TABLE_ID } from './utils';

const supabase = createServerComponentClient<Database>({ cookies });

export const queryFavoriteSongsServer = async () =>
  supabase.from(TABLE_ID).select('*');

export const queryFavoriteSongByIdServer = async (
  id: number
): Promise<FavoriteRow | null> => {
  const { data, error } = await supabase
    .from(TABLE_ID)
    .select()
    .eq(SONG_ID_COLUMN, id)
    .single();

  const song: FavoriteRow = data;
  if (error) {
    console.error(error);
    return null;
  }

  return song ?? null;
};
