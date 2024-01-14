import { useEffect } from 'react';
import { Breadcrumbs } from '../components/UI/Breadcrumbs/Breadcrumbs';
import { CategoriesBlock } from '../components/Categories/CategoriesBlock';

export const Categories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcrumbs />
      <CategoriesBlock />
    </>
  );
};
