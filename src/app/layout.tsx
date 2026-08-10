import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Manrope, Fraunces } from 'next/font/google';
import '../styles/tailwind.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-display',
  display: 'swap',
  style: ['normal', 'italic'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Savor — Fine Dining in the Heart of Mumbai',
  description: 'Savor restaurant offers chef-crafted dishes in a warm, elegant setting. Book your table or order online. Starters, mains, and artisan drinks in Mumbai.',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
  openGraph: {
    title: 'Savor — Fine Dining Mumbai',
    description: 'Chef-crafted dishes, warm ambiance, and seamless reservations.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <body className={manrope.className}>
        {children}
</body>
    </html>
  );
}