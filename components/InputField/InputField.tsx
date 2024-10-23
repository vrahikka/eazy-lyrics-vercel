import { twMerge } from 'tailwind-merge';

interface Props {
  placeholder: string;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: string;
  label?: string;
  name?: string;
  className?: string;
}
function InputField({
  onChange,
  value,
  label,
  name,
  placeholder,
  id,
  className,
  type = 'text',
}: Props) {
  return (
    <label className="flex flex-col flex-grow justify-center w-full">
      {label}
      <input
        type={type}
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        className={twMerge(
          'flex flex-shrink p-2 rounded text-white w-full bg-black focus:outline-none focus:ring-1 focus:ring-secondary',
          className,
        )}
        placeholder={placeholder}
      />
    </label>
  );
}
export default InputField;
