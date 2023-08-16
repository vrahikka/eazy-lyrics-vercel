import { Metadata } from 'next';
import Favorites from '@/components/Favorites/FavoriteLyric/Favorites';
import PageTemplate from '@/components/PageTemplate/PageTemplate';

export const metadata: Metadata = {
  title: 'Favorites',
  robots: {
    index: false,
    follow: false,
    notranslate: true,
  },
};

export default async function Page() {
  return (
    <PageTemplate>
      <Favorites />
    </PageTemplate>
  );
}
