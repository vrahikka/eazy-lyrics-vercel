import { login } from '@/app/login/actions';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';
import PasswordField from '../PasswordField/PasswordField';
import ModalTemplate from '../ModalTemplate/ModalTemplate';

export default async function Login() {
  return (
    <ModalTemplate>
      <h2 className="text-center">Sign in</h2>
      <form className="flex items-center flex-col gap-8 w-full">
        <InputField
          type="email"
          label="Email:"
          id="email"
          name="email"
          placeholder="Email"
        />
        <PasswordField
          label="Password:"
          id="password"
          name="password"
          autoComplete="current-password"
          placeholder="Password"
        />
        <Button formAction={login} text="Sign in" className="w-full" />
      </form>
    </ModalTemplate>
  );
}
