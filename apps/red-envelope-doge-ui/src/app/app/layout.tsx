import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'App',
  description: 'App',
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}
