import { logout } from '@/app/login/actions';
import { getUserDataServer } from '@/_api/supabase_server';
import ModalTemplate from '../ModalTemplate/ModalTemplate';
import Button from '../Button/Button';

export default async function Logout() {
  const userData = await getUserDataServer();
  return (
    <ModalTemplate>
      <h2 className="text-center">Signed in</h2>
      <div className="flex gap-2 flex-wrap">
        <p className="text-gray">Email:</p>
        <p>{userData.data.user?.email ?? '?'}</p>
      </div>
      <form>
        <Button formAction={logout} text="Sign out" className="w-full" />
      </form>
    </ModalTemplate>
  );
}
