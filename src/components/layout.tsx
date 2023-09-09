import React, { ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { Suspense } from 'react';
import Spinner from '@/components/spinner';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Suspense fallback={<Spinner/>}>
      <div className="w-full bg-bblack text-ttext">
        <div className="container min-h-screen max-w-screen-lg mx-auto px-4 flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 py-14 flex items-stretch">
            <div className="w-full">{children}</div>
          </main>
          <Footer />
        </div>
      </div>
    </Suspense>
  );
};

export default Layout;
