import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Builder.io Test - Hello World',
  description: 'A simple dark mode landing page to test Builder.io space creation and Vercel deployment',
  keywords: ['Next.js', 'Builder.io', 'Dark Mode', 'Landing Page'],
  authors: [{ name: 'DARX' }],
  openGraph: {
    title: 'Builder.io Test - Hello World',
    description: 'A simple dark mode landing page to test Builder.io space creation and Vercel deployment',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Builder.io Test - Hello World',
    description: 'A simple dark mode landing page to test Builder.io space creation and Vercel deployment',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}