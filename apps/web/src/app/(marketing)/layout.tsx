'use client';

import { siteConfig } from '@/lib/config';
import { usePathname } from 'next/navigation';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          '@id': `${siteConfig.url}/#organization`,
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          '@type': 'ImageObject',
          url: `${siteConfig.url}/images/brand/logo.png`,
          width: 512,
          height: 512,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: `${siteConfig.name}: Protecting the digital future`,
        isPartOf: {
          '@id': `${siteConfig.url}/#website`,
        },
        about: {
          '@id': `${siteConfig.url}/#organization`,
        },
        description: siteConfig.description,
        inLanguage: 'en-US',
      },
      {
        '@type': 'SoftwareApplication',
        name: siteConfig.name,
        applicationCategory: 'DeveloperApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
        operatingSystem: 'Web',
        description: siteConfig.description,
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-1 items-center justify-center">{children}</div>
      {!isHomePage && (
        <footer className="pb-6">
          <p className="text-muted-foreground text-center text-sm">
            &copy; {new Date().getFullYear()} CyberMinds. All rights reserved.
          </p>
        </footer>
      )}
    </div>
  );
}
