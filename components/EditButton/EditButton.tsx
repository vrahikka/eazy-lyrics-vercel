import Pen from '@/public/images/Pen';

interface Props {
  stateOn: boolean;
  onClick: () => void;
}
function EditButton({ onClick, stateOn }: Props) {
  return (
    <button onClick={onClick} aria-label="Edit">
      <Pen
        width={24}
        height={24}
        className={`${
          stateOn ? 'fill-secondary' : 'fill-white'
        } hover:fill-button-hoverBackgroundGray`}
      />
    </button>
  );
}
export default EditButton;
