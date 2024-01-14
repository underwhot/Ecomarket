import { useEffect } from 'react';
import { Breadcrumbs } from '../components/UI/Breadcrumbs/Breadcrumbs';
import { CartProductsList } from '../components/CartProductsList/CartProductsList';

const Cart = () => {
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

export default Cart;
