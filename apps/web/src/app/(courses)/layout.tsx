import { Header } from '@/components/header';

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border/40 py-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} CyberMinds. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
