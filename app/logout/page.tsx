import Logout from '@/components/LoginLogoutSingUp/Logout';
import PageTemplate from '@/components/PageTemplate/PageTemplate';

export const runtime = 'edge';

export default async function Page() {
  return (
    <PageTemplate className="mt-24 w-fit">
      <Logout />
    </PageTemplate>
  );
}
