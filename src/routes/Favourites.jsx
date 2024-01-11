import { useEffect } from 'react';
import { Breadcrumbs } from '../components/UI/Breadcrumbs/Breadcrumbs';
import { FavouritesProductsList } from '../components/FavouritesProductsList/FavouritesProductsList';

export const Favourites = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Breadcrumbs />
      <FavouritesProductsList />
    </>
  );
};
