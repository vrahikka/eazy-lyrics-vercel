import Link from 'next/link';
import Image from 'next/image';
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
      className="grid w-full gap-4 py-2 px-4 rounded border border-gray bg-dark justify-between items-center min-w-0 hover:border-secondary"
      style={{
        gridTemplateAreas: '"thumbnail title favorite"',
        gridTemplateColumns: '3.125rem 1fr 24px',
      }}
      href={`/song/${id}`}
    >
      <Image
        alt="Lyric thumbnail"
        src={thumbnailUrl}
        width={50}
        height={50}
        style={{
          gridArea: 'thumbnail',
          borderRadius: '0.25rem',
          width: '3.125rem',
          height: '3.125rem',
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
        <p className="text-lightGray whitespace-nowrap overflow-hidden min-w-0 text-ellipsis">
          {artistName}
        </p>
      </div>
      <div className="flex" style={{ gridArea: 'favorite' }}>
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
