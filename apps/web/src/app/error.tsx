'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.error(error);
    }
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h2>Something went wrong!</h2>
      <p className="text-muted-foreground-foreground">
        An error occurred while processing your request.
      </p>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
