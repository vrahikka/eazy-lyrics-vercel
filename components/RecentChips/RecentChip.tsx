import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { deleteRecentSearch } from '@/src/localStorage';
import CloseButton from '../CloseButton/CloseButton';

interface Props {
  value: string;
  editOn?: boolean;
}
function RecentChip({ value, editOn }: Props) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/search?search=${value}`);
  };

  const onCloseClick = () => {
    deleteRecentSearch(value);
    router.refresh();
  };

  const closeStyle = editOn ? 'visible' : 'invisible';

  return (
    <div className="[&_.close]:hover:visible relative">
      <button
        onClick={onClick}
        className="bg-dark border hover:border-secondary  border-primary rounded-full p-2 relative"
      >
        {value}
      </button>
      <CloseButton
        onClick={onCloseClick}
        className={twMerge(
          'close invisible absolute -top-2 -right-2',
          closeStyle
        )}
      />
    </div>
  );
}
export default RecentChip;
