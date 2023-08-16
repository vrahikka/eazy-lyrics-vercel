import { twMerge } from 'tailwind-merge';

interface Props {
  onClick: () => void;
  text: string;
  className?: string;
}
function Button({ onClick, text, className }: Props) {
  return (
    <button
      onClick={onClick}
      aria-label={text}
      className={twMerge(
        'bg-sky-400 p-2 rounded ring-1 ring-primary hover:cursor-pointer hover:ring-secondary',
        className
      )}
    >
      {text}
    </button>
  );
}
export default Button;
