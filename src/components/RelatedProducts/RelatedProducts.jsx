import { useEffect, useState } from 'react';
import axios from 'axios';

import { Container } from '../Container/Container';
import { SectionTop } from '../UI/SectionTop/SectionTop';
import { ProductCard } from '../ProductCard/ProductCard';
import { ProductCardSkeleton } from '../ProductCard/ProductCardSkeleton';

import styles from './RelatedProducts.module.scss';

const limit = 4;

export const RelatedProducts = ({ category }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    if (category) {
      async function getProducts() {
        try {
          const res = await axios.get(
            `https://654fb2ee358230d8f0cda05a.mockapi.io/products?filter=${category}&sortBy=rating&order=desc&page=1&limit=${limit}`
          );
          setProducts(res.data);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }

      getProducts();
    }
  }, [category]);

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
      <SectionTop title="Related Products" to="/shop" />
      <ul className={styles.productsList}>
        {isLoading ? preloader : renderProducts}
      </ul>
    </Container>
  );
};
