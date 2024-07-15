"use client";

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Header from '@/app/ui/landing/global/Header';
import { useEffect, useState } from 'react';
import Footer from './ui/landing/global/Footer';
// import Footer from '@/components/Footer'; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showHeader, setShowHeader] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        {showHeader && <Header />}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
