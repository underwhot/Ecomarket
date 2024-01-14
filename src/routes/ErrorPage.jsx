import { useEffect } from 'react';
import { useRouteError } from 'react-router-dom';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Subscribe } from '../components/Subscribe/Subscribe';
import { Breadcrumbs } from '../components/UI/Breadcrumbs/Breadcrumbs'
import { PageNotFound } from '../components/PageNotFound/PageNotFound';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Breadcrumbs />
        <PageNotFound />
      </main>
      <Subscribe />
      <Footer />
    </>
  );
};

export default ErrorPage;
