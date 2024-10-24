import { Metadata } from 'next';
import { songDetails, songLyric } from '@/_api/api';
import FavoriteButton from '@/components/Favorites/FavoriteButton/FavoriteButton';
import InfoBox from '@/components/InfoBox/InfoBox';
import Lyric from '@/components/Lyric/Lyric';
import PageTemplate from '@/components/PageTemplate/PageTemplate';
import { isError } from '@/src/guards';
import { getReleaseDateString } from '@/src/utils';
import { queryFavoriteSongByIdServer } from '@/_api/supabase_server';
import { PageProps } from '@/src/types';

export const metadata: Metadata = {
  title: 'Song',
  robots: {
    index: false,
    follow: false,
    notranslate: true,
  },
};

export default async function Page({ params }: PageProps<'id'>) {
  const { id } = await params;

  const lyricData = await songLyric(+id);
  const details = await songDetails(+id);
  const favoriteSong = await queryFavoriteSongByIdServer(+id);
  const isFavorite = !!favoriteSong;

  if (isError(lyricData) || isError(details)) {
    return <p>ERROR while fetching data</p>;
  }

  return (
    <PageTemplate>
      <div
        className="flex flex-col md:grid justify-center"
        style={{
          gridTemplateAreas: '"lyric info"',
          gridTemplateColumns: '1fr 15rem',
        }}
      >
        <div
          className="flex flex-col items-center"
          style={{ gridArea: 'lyric' }}
        >
          <div className="flex items-center">
            <h2 className="text-center">
              {lyricData?.lyrics?.tracking_data.title}
            </h2>
            <FavoriteButton
              id={+id}
              artist={details?.song?.primary_artist.name ?? ''}
              title={details?.song?.title ?? ''}
              thumbnailUrl={details?.song?.song_art_image_thumbnail_url ?? ''}
              initialFavoriteState={isFavorite}
            />
          </div>
          <div className="md:hidden">
            <InfoBox
              album={details?.song?.album.name ?? ''}
              artist={details?.song?.primary_artist.name ?? ''}
              imageUrl={details?.song?.song_art_image_url ?? ''}
              releaseDate={getReleaseDateString(
                details?.song?.release_date_components,
              )}
              title={details?.song?.title ?? ''}
              youtubeUrl={details?.song?.youtube_url}
              spotifyUUID={details?.song?.spotify_uuid}
              soundCloudUrl={details?.song?.soundcloud_url}
            />
          </div>
          <Lyric htmlText={lyricData?.lyrics?.lyrics.body.html ?? ''} />
        </div>
        <div className="hidden md:flex">
          <InfoBox
            album={details?.song?.album.name ?? ''}
            artist={details?.song?.primary_artist.name ?? ''}
            imageUrl={details?.song?.song_art_image_url ?? ''}
            releaseDate={getReleaseDateString(
              details?.song?.release_date_components,
            )}
            title={details?.song?.title ?? ''}
            youtubeUrl={details?.song?.youtube_url}
            spotifyUUID={details?.song?.spotify_uuid}
            soundCloudUrl={details?.song?.soundcloud_url}
          />
        </div>
      </div>
    </PageTemplate>
  );
}
