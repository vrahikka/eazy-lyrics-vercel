'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import type { Database } from '@/src/lib/database.types';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';
import PasswordField from '../PasswordField/PasswordField';
import ModalTemplate from '../ModalTemplate/ModalTemplate';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignUp = async () => {
    const response = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    console.log(response);
    if (response.error) {
      setErrorMessage(response.error.message);
    } else {
      router.refresh();
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSignUp();
  };

  return (
    <ModalTemplate>
      <h2 className="text-center">Sign up</h2>
      <form className="flex flex-col gap-8 w-full" onSubmit={onSubmit}>
        <InputField
          type="email"
          label="Email:"
          id="sing_up_email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Your email here"
        />
        <PasswordField
          label="Password:"
          autoComplete="new-password"
          id="sing_up_password"
          placeholder="Your password here"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {errorMessage && <p className="text-error">{errorMessage}</p>}
        <Button onClick={handleSignUp} text="Sign up" className="w-full" />
      </form>
    </ModalTemplate>
  );
}
