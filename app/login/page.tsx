import Login from '@/components/LoginLogoutSingUp/Login';
import PageTemplate from '@/components/PageTemplate/PageTemplate';

export default async function Page() {
  return (
    <PageTemplate className="md:mt-24 w-fit">
      <Login />
    </PageTemplate>
  );
}
