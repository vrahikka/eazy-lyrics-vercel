import SignUp from '@/components/LoginLogoutSingUp/SignUp';
import PageTemplate from '@/components/PageTemplate/PageTemplate';

export default async function Page() {
  return (
    <PageTemplate className="md:mt-24 w-fit">
      <SignUp />
    </PageTemplate>
  );
}
