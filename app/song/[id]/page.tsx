import { songDetails, songLyric } from '@/_api/api';
import FavoriteButton from '@/components/Favorites/FavoriteButton/FavoriteButton';
import InfoBox from '@/components/InfoBox/InfoBox';
import Lyric from '@/components/Lyric/Lyric';
import PageTemplate from '@/components/PageTemplate/PageTemplate';
import { isError } from '@/src/guards';
import { getReleaseDateString } from '@/src/utils';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const lyricData = await songLyric(+id ?? '');
  const details = await songDetails(+id ?? '');

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
              {lyricData?.lyrics.tracking_data.title}
            </h2>
            <FavoriteButton
              id={+id}
              artist={details?.song?.primary_artist.name ?? ''}
              title={details?.song?.title ?? ''}
              thumbnailUrl={details?.song?.song_art_image_thumbnail_url ?? ''}
            />
          </div>
          <div className="md:hidden">
            <InfoBox
              album={details?.song?.album.name ?? ''}
              artist={details?.song?.primary_artist.name ?? ''}
              imageUrl={details?.song?.song_art_image_url ?? ''}
              releaseDate={getReleaseDateString(
                details?.song?.release_date_components
              )}
              title={details?.song?.title ?? ''}
              youtubeUrl={details?.song?.youtube_url}
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
              details?.song?.release_date_components
            )}
            title={details?.song?.title ?? ''}
            youtubeUrl={details?.song?.youtube_url}
          />
        </div>
      </div>
    </PageTemplate>
  );
}
