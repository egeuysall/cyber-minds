import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name}: Protecting the digital future`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/images/brand/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    categories: ['security', 'utilities', 'business'],
    orientation: 'portrait-primary',
    dir: 'ltr',
    lang: 'en-US',
  };
}
