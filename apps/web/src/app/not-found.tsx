import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="space-y-2">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p className="text-secondary-foreground max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <Button asChild size="lg">
        <Link href="/" className="no-underline">
          Go Home
        </Link>
      </Button>
    </div>
  );
}
