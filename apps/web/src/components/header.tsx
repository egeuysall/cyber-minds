'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '@/lib/config';

type NavigationItem = {
  name: string;
  href: string;
};

const navigation: NavigationItem[] = [{ name: 'Courses', href: '/courses' }];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background border-muted sticky top-0 z-50 w-full border-b">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="text-foreground -m-1.5 flex items-center gap-2 p-1.5 no-underline"
          >
            <span className="text-xl font-bold">{siteConfig.name}</span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map(item => {
            return (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground text-sm no-underline transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-foreground -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 px-6 pt-2 pb-6">
            {navigation.map(item => {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground flex items-center gap-2 no-underline transition-colors transition-opacity hover:opacity-75"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
