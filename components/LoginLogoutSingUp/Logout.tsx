'use client';

import {
  createClientComponentClient,
  User,
} from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';
import type { Database } from '@/src/lib/database.types';
import Button from '../Button/Button';
import ModalTemplate from '../ModalTemplate/ModalTemplate';

export default function Logout() {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const getUser = async () => {
      const userData = await supabase.auth.getUser();
      setUser(userData?.data?.user ?? null);
    };
    getUser();
  }, [supabase.auth]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.replace('/');
  };

  return (
    <ModalTemplate>
      <h2 className="text-center">Signed in</h2>
      <div className="flex gap-2">
        <p className="text-gray">Email:</p>
        <p>{user?.email}</p>
      </div>
      <Button onClick={handleSignOut} text="Sign out" className="w-full" />
    </ModalTemplate>
  );
}
