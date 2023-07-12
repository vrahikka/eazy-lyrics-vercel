import type { Database } from '@/src/lib/database.types';

declare global {
  type FavoriteSong = Database['public']['Tables']['favorite_song_id']['Row'];
}
