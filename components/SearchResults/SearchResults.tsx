import { memo } from 'react';
import { SearchHit } from '@/src/types';
import LyricListItem from '../LyricListItem/LyricListItem';

interface Props {
  hits: SearchHit[];
}
async function SearchResults({ hits }: Props) {
  return (
    <ul className="flex w-full flex-col gap-2">
      {hits.map((hit) => (
        <LyricListItem
          key={hit.result.id}
          id={hit.result.id}
          artistName={hit.result.primary_artist.name}
          thumbnailUrl={hit.result.song_art_image_thumbnail_url}
          title={hit.result.title}
        />
      ))}
    </ul>
  );
}
export default memo(SearchResults);
