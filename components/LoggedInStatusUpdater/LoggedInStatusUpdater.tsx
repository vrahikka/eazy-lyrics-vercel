'use client';

import { getUserDataClient } from '@/_api/supabase_client';
import { useLoggedInStore } from '@/src/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type Props = {
  redirectHome?: boolean;
};

export default function LoggedInStatusUpdater({ redirectHome }: Props) {
  const router = useRouter();
  const updateLoggedInStatus = useLoggedInStore(
    (state) => state.updateLoggedInStatus,
  );

  useEffect(() => {
    const update = async () => {
      const userData = await getUserDataClient();
      if (userData.data.user) {
        updateLoggedInStatus(true);
      } else {
        updateLoggedInStatus(false);
      }
      if (redirectHome) {
        router.push('/');
      }
    };
    update();
  }, [redirectHome, router, updateLoggedInStatus]);

  return null;
}
