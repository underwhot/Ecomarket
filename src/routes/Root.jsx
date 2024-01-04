import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Subscribe } from '../components/Subscribe/Subscribe';

export const Root = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Subscribe />
      <Footer />
    </>
  );
};
