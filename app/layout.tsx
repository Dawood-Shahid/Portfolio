import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dawood Shahid - Software Engineer',
  description:
    "I'm Dawood Shahid, a software engineer passionate about building modern web and mobile applications.",
  generator: 'Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.png' />
      </head>
      <body>{children}</body>
    </html>
  );
}
