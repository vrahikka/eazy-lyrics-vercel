import { ErrorMessage } from '@/src/types';

interface Props {
  data: ErrorMessage;
}
function Error({ data }: Props) {
  return (
    <div className="flex-col text-center">
      <h2>{data.statusCode}</h2>
      <p>{data.message}</p>
    </div>
  );
}
export default Error;
