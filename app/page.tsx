import Favorites from '@/components/Favorites/FavoriteLyric/Favorites';
import PageTemplate from '@/components/PageTemplate/PageTemplate';
import RecentChips from '@/components/RecentChips/RecentChips';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <PageTemplate>
      <main className="flex flex-col items-center gap-8 md:gap-16 w-full">
        <Suspense
          fallback={<p className="text-gray">Loading recent searches...</p>}
        >
          <RecentChips />
        </Suspense>
        <Suspense fallback={<p className="text-gray">Loading favorites...</p>}>
          <Favorites />
        </Suspense>
      </main>
    </PageTemplate>
  );
}
