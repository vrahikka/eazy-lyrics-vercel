import Link from 'next/link';
import FavoriteButton from '../Favorites/FavoriteButton/FavoriteButton';

export interface FavoriteLyricDB {
  song_id: number;
  title: string;
  email: string;
  artist: string;
  thumbnail_url: string;
}

interface LyricListItemProps {
  id: number;
  thumbnailUrl: string;
  title: string;
  artistName: string;
  initialFavoriteState?: boolean;
  refresh?: boolean;
}

function LyricListItem({
  id,
  thumbnailUrl,
  title,
  artistName,
  initialFavoriteState,
  refresh,
}: LyricListItemProps) {
  return (
    <Link
      prefetch={false}
      className="grid w-full gap-4 p-2 rounded border border-gray bg-dark justify-between items-center min-w-0 hover:border-secondary"
      style={{
        gridTemplateAreas: '"thumbnail title favorite"',
        gridTemplateColumns: '50px 1fr 50px',
      }}
      href={`/song/${id}`}
    >
      <img
        alt="Lyric thumbnail"
        src={thumbnailUrl}
        width={50}
        height={50}
        style={{
          gridArea: 'thumbnail',
          borderRadius: '0.25rem',
          height: '50px',
        }}
      />
      <div
        className="flex flex-col gap-1"
        style={{
          gridArea: 'title',
          overflow: 'hidden',
        }}
      >
        <h5 className="text-lg font-medium whitespace-normal md:whitespace-nowrap overflow-hidden min-w-0 text-ellipsis">
          {title}
        </h5>
        <p
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            minWidth: '0',
          }}
        >
          {artistName}
        </p>
      </div>
      <div className="flex gap-12" style={{ gridArea: 'favorite' }}>
        <FavoriteButton
          id={id}
          title={title}
          artist={artistName}
          thumbnailUrl={thumbnailUrl}
          initialFavoriteState={!!initialFavoriteState}
          refresh={refresh}
        />
      </div>
    </Link>
  );
}
export default LyricListItem;
