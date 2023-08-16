import { Metadata } from 'next';
import Logout from '@/components/LoginLogoutSingUp/Logout';
import PageTemplate from '@/components/PageTemplate/PageTemplate';

export const metadata: Metadata = {
  title: 'Logout',
  robots: {
    index: false,
    follow: false,
    notranslate: true,
  },
};

export default async function Page() {
  return (
    <PageTemplate className="md:mt-24 w-fit">
      <Logout />
    </PageTemplate>
  );
}
