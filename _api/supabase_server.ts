import type { FavoriteRow } from '@/src/lib/database.types';
import { createServerClient as supabaseCreateServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { SONG_ID_COLUMN, TABLE_ID } from './utils';

export async function getServerClient() {
  const cookieStore = await cookies();

  return supabaseCreateServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set({ name, value, ...options }),
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
}

export const queryFavoriteSongsServer = async () => {
  const client = await getServerClient();
  return client.from(TABLE_ID).select('*');
};

export const queryFavoriteSongByIdServer = async (
  id: number,
): Promise<FavoriteRow | null> => {
  const client = await getServerClient();
  const { data, error } = await client
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

export const getUserDataServer = async () => {
  const supabase = await getServerClient();
  const user = await supabase.auth.getUser();
  return user;
};
