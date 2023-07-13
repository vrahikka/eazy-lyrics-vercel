import Logout from '@/components/LoginLogoutSingUp/Logout';
import PageTemplate from '@/components/PageTemplate/PageTemplate';

export default async function Page() {
  return (
    <PageTemplate className="md:mt-24 w-fit">
      <Logout />
    </PageTemplate>
  );
}
