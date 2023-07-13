'use client';

import Button from '@/components/Button/Button';
import ModalTemplate from '@/components/ModalTemplate/ModalTemplate';
import PageTemplate from '@/components/PageTemplate/PageTemplate';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <PageTemplate className="md:mt-24 w-fit">
      <ModalTemplate>
        <div className="flex flex-col justify-center items-center gap-8">
          <h2>Error</h2>
          <p>Oops, something went wrong!</p>
          <Button
            text="Try again"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          />
        </div>
      </ModalTemplate>
    </PageTemplate>
  );
}
