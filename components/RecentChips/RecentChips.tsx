'use client';

import { useEffect, useState } from 'react';
import { getRecentSearches } from '@/src/localStorage';
import RecentChip from './RecentChip';
import EditButton from '../EditButton/EditButton';

function RecentChips() {
  const [isMounted, setIsMounted] = useState(false);
  const [editOn, setEditOn] = useState(false);
  const recentSearches = getRecentSearches();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onClick = () => {
    setEditOn((prev) => !prev);
  };

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div className="flex items-center">
        <h2 className="text-center">Recent searches</h2>
        <div className="md:hidden flex h-fit">
          <EditButton onClick={onClick} stateOn={editOn} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full gap-4">
        {isMounted && recentSearches && recentSearches.length > 0 ? (
          <>
            {recentSearches.map((value) => (
              <RecentChip key={value} value={value} editOn={editOn} />
            ))}
          </>
        ) : (
          <p className="text-gray">No recent searches</p>
        )}
      </div>
    </div>
  );
}
export default RecentChips;
