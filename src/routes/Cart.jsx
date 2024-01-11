import { useEffect } from 'react';
import { Breadcrumbs } from '../components/UI/Breadcrumbs/Breadcrumbs';
import { CartProductsList } from '../components/CartProductsList/CartProductsList';

export const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Breadcrumbs />
      <CartProductsList />
    </>
  );
};
