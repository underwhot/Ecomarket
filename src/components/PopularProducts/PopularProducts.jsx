import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchPopularProducts,
  selectIsLoadingViaAPI,
  selectPopularProducts,
} from '../../redux/slices/popularProductsSlice';
import { Container } from '../Container/Container';
import { SectionTop } from '../UI/SectionTop/SectionTop';
import { ProductCard } from '../ProductCard/ProductCard';
import { ProductCardSkeleton } from '../ProductCard/ProductCardSkeleton';

import styles from './PopularProducts.module.scss';

const limit = 12;

export const PopularProducts = () => {
  const products = useSelector(selectPopularProducts);
  const isLoading = useSelector(selectIsLoadingViaAPI);
  const dispatch = useDispatch();

  useEffect(() => {
    handleFetchProducts();
  }, []);

  const handleFetchProducts = () => {
    dispatch(
      fetchPopularProducts(
        `https://654fb2ee358230d8f0cda05a.mockapi.io/products?sortBy=rating&order=desc&page=1&limit=${limit}`
      )
    );
  };

  const renderProducts = products.map((product) => (
    <li className={styles.productsItem} key={product.id}>
      <ProductCard {...product} />
    </li>
  ));

  const preloader = new Array(limit).fill(null).map((_, i) => (
    <li className={styles.productsItem} key={i}>
      <ProductCardSkeleton />
    </li>
  ));

  return (
    <Container>
      <SectionTop title="Popular Products" to="/" />
      <ul className={styles.productsList}>
        {isLoading ? preloader : renderProducts}
      </ul>
    </Container>
  );
};
