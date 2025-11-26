import { Inter, JetBrains_Mono, Lora } from 'next/font/google';

export const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const fontSerif = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});
