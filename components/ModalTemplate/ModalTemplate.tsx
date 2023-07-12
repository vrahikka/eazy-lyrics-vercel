import { ReactNode } from 'react';

function ModalTemplate({ children }: { children: ReactNode }) {
  return (
    <div className="md:w-[25rem] max-w-[25rem] gap-8 flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
export default ModalTemplate;
