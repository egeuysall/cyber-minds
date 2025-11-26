export const siteConfig = {
  name: 'CyberMinds',
  description:
    'CyberMinds is a leading cybersecurity platform dedicated to protecting organizations and individuals in the digital age. We provide comprehensive security solutions, threat detection, and expert guidance to safeguard your digital assets and ensure a secure online future.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://cyber-minds.github.io/CyberMinds',
  ogImage: '/images/og-image.png',
} as const;
