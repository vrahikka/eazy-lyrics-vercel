export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface FavoriteRow {
  email: string;
  id: number;
  inserted_at: string;
  song_id: number;
  updated_at: string;
  title: string;
  artist: string;
  thumbnail_url: string;
}

export interface Database {
  public: {
    Tables: {
      favorite_song_id: {
        Row: FavoriteRow;
        Insert: {
          email?: string;
          id?: number;
          inserted_at?: string;
          song_id?: number;
          updated_at?: string;
          title?: string;
          artist?: string;
          thumbnail_url?: string;
        };
        Update: Partial<FavoriteRow>;
        Relationships: [];
      };
      test: {
        Row: {
          created_at: string | null;
          id: number;
          text: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          text?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          text?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
