import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import type { Database } from '@/src/lib/database.types';

const supabase = createServerComponentClient<Database>({ cookies });

export const queryFavoriteSongsServer = async () =>
  supabase.from('favorite_song_id').select('*');
