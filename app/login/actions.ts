'use server';

import { getServerClient } from '@/_api/supabase_server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const supabase = await getServerClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error);
    redirect('/error');
  }

  revalidatePath('/');
  redirect('/protected');
}

export async function logout() {
  const supabase = await getServerClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
    redirect('/error');
  }

  revalidatePath('/');
  redirect('/protected');
}

export async function signup(formData: FormData) {
  const supabase = await getServerClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/');
  redirect('/');
}
