'use client';

import X from '@/public/images/X';
import { twMerge } from 'tailwind-merge';

interface Props {
  onClick: () => void;
  className?: string;
}
function CloseButton({ onClick, className }: Props) {
  const onClickWrapper = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    onClick();
  };

  return (
    <button
      aria-label="Close"
      onClick={onClickWrapper}
      className={twMerge(
        'border border-white rounded-full bg-dark p-1 hover:border-secondary w-fit',
        className,
      )}
    >
      <X height={16} width={16} />
    </button>
  );
}
export default CloseButton;
