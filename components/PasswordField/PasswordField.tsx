import { twMerge } from 'tailwind-merge';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
  id: string;
  label?: string;
  autoComplete?: string;
  className?: string;
}

function PasswordField({
  onChange,
  value,
  label,
  placeholder,
  id,
  autoComplete = 'off',
  className,
}: Props) {
  return (
    <label className="flex flex-col flex-grow justify-center w-full">
      {label}
      <input
        id={id}
        value={value}
        type="password"
        autoComplete={autoComplete}
        onChange={onChange}
        className={twMerge(
          'flex flex-shrink p-2 rounded text-white w-full bg-black focus:outline-none focus:ring-1 focus:ring-secondary',
          className
        )}
        placeholder={placeholder}
      />
    </label>
  );
}
export default PasswordField;
