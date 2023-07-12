import { twMerge } from 'tailwind-merge';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
  id: string;
  type?: string;
  label?: string;
  className?: string;
}
function InputField({
  onChange,
  value,
  label,
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
export default InputField;
