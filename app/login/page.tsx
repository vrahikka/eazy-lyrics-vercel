import { Metadata } from 'next';
import Login from '@/components/LoginLogoutSingUp/Login';
import PageTemplate from '@/components/PageTemplate/PageTemplate';

export const metadata: Metadata = {
  title: 'Login',
  robots: {
    index: false,
    follow: false,
    notranslate: true,
  },
};

export default async function Page() {
  return (
    <PageTemplate className="md:mt-24 w-fit">
      <Login />
    </PageTemplate>
  );
}
