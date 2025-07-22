import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dawood Shahid - Software Engineer',
  description:
    'Portfolio of Dawood Shahid, a skilled Software Engineer specializing in modern web and mobile development.',
  generator: 'Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
