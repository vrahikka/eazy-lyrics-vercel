'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import type { Database } from '@/src/lib/database.types';
import Link from 'next/link';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';
import PasswordField from '../PasswordField/PasswordField';
import ModalTemplate from '../ModalTemplate/ModalTemplate';

export default function Login() {
  const defaultEmail = process.env.NEXT_PUBLIC_USER_EMAIL_ADDRESS ?? '';
  const defaultPassword = process.env.NEXT_PUBLIC_USER_PASSWORD ?? '';

  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState(defaultPassword);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignIn = async () => {
    const response = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(response);
    if (response.error) {
      setErrorMessage(response.error.message);
    } else {
      router.push('/');
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSignIn();
  };

  return (
    <ModalTemplate>
      <h2 className="text-center">Sign in</h2>
      <form
        className="flex items-center flex-col gap-8 w-full"
        onSubmit={onSubmit}
      >
        <InputField
          type="email"
          label="Email:"
          id="sing_in_email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />
        <PasswordField
          label="Password:"
          id="sing_in_password"
          autoComplete="current-password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {errorMessage && <p className="text-error">{errorMessage}</p>}
        <Button onClick={handleSignIn} text="Sign in" className="w-full" />
        <Link
          href="#"
          aria-label="Sing up (Disabled)"
          className="text-gray pointer-events-none"
        >
          Sing up (Disabled)
        </Link>
      </form>
    </ModalTemplate>
  );
}
