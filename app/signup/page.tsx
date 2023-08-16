import { Metadata } from 'next';
import SignUp from '@/components/LoginLogoutSingUp/SignUp';
import PageTemplate from '@/components/PageTemplate/PageTemplate';

export const metadata: Metadata = {
  title: 'Sign up',
  robots: {
    index: false,
    follow: false,
    notranslate: true,
  },
};

export default async function Page() {
  return (
    <PageTemplate className="md:mt-24 w-fit">
      <SignUp />
    </PageTemplate>
  );
}
