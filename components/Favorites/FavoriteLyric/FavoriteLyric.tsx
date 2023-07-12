import LyricListItem, {
  FavoriteLyricDB,
} from '../../LyricListItem/LyricListItem';

interface Props {
  favorite: FavoriteLyricDB;
}

function FavoriteLyric({ favorite }: Props) {
  return (
    <LyricListItem
      id={favorite.song_id}
      title={favorite.title}
      artistName={favorite.artist}
      thumbnailUrl={favorite.thumbnail_url}
      initialFavoriteState
      refresh
    />
  );
}
export default FavoriteLyric;
