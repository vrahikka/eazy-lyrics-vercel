import { twMerge } from 'tailwind-merge';

interface Props {
  formAction?: string | ((formData: FormData) => void) | undefined;
  onClick?: () => void;
  text: string;
  className?: string;
}
function Button({ onClick, formAction, text, className }: Props) {
  return (
    <button
      formAction={formAction}
      onClick={onClick}
      aria-label={text}
      className={twMerge(
        'bg-sky-400 p-2 rounded ring-1 ring-primary hover:cursor-pointer hover:ring-secondary',
        className,
      )}
    >
      {text}
    </button>
  );
}
export default Button;
