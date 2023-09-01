export interface SearchResult {
  hits: SearchHit[];
}

export type ErrorMessage = {
  statusCode: number;
  message: string;
};

export interface SearchHit {
  result: {
    api_path: string;
    artist_names: string | string[];
    full_title: string;
    header_image_thumbnail_url: string;
    header_image_url: string;
    id: number;
    instrumental: false;
    path: string;
    song_art_image_thumbnail_url: string;
    song_art_image_url: string;
    title: string;
    title_with_featured: string;
    url: string;
    primary_artist: {
      api_path: string;
      header_image_url: string;
      id: number;
      image_url: string;
      name: string;
      slug: string;
      url: string;
    };
  };
}

export interface SongLyric {
  lyrics: {
    _type: string;
    api_path: string;
    lyrics: {
      body: {
        html: string;
      };
    };
    path: string;
    song_id: number;
    tracking_data: {
      song_id: number;
      title: string;
      primary_artist: string;
      primary_artist_id: number;
      primary_album: string;
      primary_album_id: number;
      release_date: string;
      has_youtube_url: boolean;
    };
  };
}

export interface ReleaseDate {
  year: number;
  month: number;
  day: number;
}

export interface Album {
  api_path: string;
  cover_art_thumbnail_url: string;
  cover_art_url: string;
  full_title: string;
  id: number;
  name: string;
  name_with_artist: string;
  release_date_components: ReleaseDate;
  release_date_for_display: string;
  url: string;
}

interface Artist {
  api_path: string;
  header_image_url: string;
  id: number;
  image_url: string;
  index_character: string;
  is_meme_verified: boolean;
  is_verified: boolean;
  name: string;
  slug: string;
  url: string;
  iq: number;
}

export interface SongDetails {
  song: {
    title: string;
    album: Album;
    primary_artist: Artist;
    title_with_featured: string;
    artist_names: string;
    custom_header_image_url: string;
    custom_song_art_image_url: string;
    header_image_url: string;
    header_image_thumbnail_url: string;
    song_art_image_thumbnail_url: string;
    song_art_image_url: string;
    spotify_uuid: string;
    soundcloud_url: string;
    description: {
      html: string;
      description_preview: string;
    };
    full_title: string;
    id: number;
    release_date_components: ReleaseDate;
    youtube_url: string;
  };
}

// "highlights": [],
// "index": "song",
// "type": "song",
// "result": {
// "_type": "song",
// "annotation_count": 13,
// "api_path": "/songs/2396871",
// "artist_names": "Alan Walker",
// "full_title": "Faded by Alan Walker",
// "header_image_thumbnail_url": "https://images.genius.com/10db94c5c11e1bb1ac9cc917a6c59250.300x300x1.jpg",
// "header_image_url": "https://images.genius.com/10db94c5c11e1bb1ac9cc917a6c59250.1000x1000x1.jpg",
// "id": 2396871,
// "instrumental": false,
// "lyrics_owner_id": 93685,
// "lyrics_state": "complete",
// "lyrics_updated_at": 1641110891,
// "path": "/Alan-walker-faded-lyrics",
// "pyongs_count": 114,
// "song_art_image_thumbnail_url": "https://images.genius.com/708aef5551c9f670205b5cab3f38c8bd.300x300x1.jpg",
// "song_art_image_url": "https://images.genius.com/708aef5551c9f670205b5cab3f38c8bd.1000x1000x1.jpg",
// "stats": {
// "unreviewed_annotations": 0,
// "hot": false,
// "pageviews": 1290638
// },
// "title": "Faded",
// "title_with_featured": "Faded",
// "updated_by_human_at": 1644264066,
// "url": "https://genius.com/Alan-walker-faded-lyrics",
// "primary_artist": {
// "_type": "artist",
// "api_path": "/artists/456537",
// "header_image_url": "https://images.genius.com/5dc7f5c57981ba34e464414f7fc08ebf.1000x333x1.jpg",
// "id": 456537,
// "image_url": "https://images.genius.com/70b44d7b5a4be028e87b865dd425a4cc.1000x1000x1.jpg",
// "index_character": "a",
// "is_meme_verified": false,
// "is_verified": true,
// "name": "Alan Walker",
// "slug": "Alan-walker",
// "url": "https://genius.com/artists/Alan-walker",
// "iq": 3463
// }
