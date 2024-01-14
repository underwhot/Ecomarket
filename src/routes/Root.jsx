import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Subscribe } from '../components/Subscribe/Subscribe';
import { PageLoader } from '../components/PageLoader/PageLoader';

export const Root = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Subscribe />
      <Footer />
    </>
  );
};
