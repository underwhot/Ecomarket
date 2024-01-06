import { useEffect } from 'react';
import { CartProductsList } from '../components/CartProductsList/CartProductsList';
import { Breadcrumbs } from '../components/UI/Breadcrumbs/Breadcrumbs';

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
