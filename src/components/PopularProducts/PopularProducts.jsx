import { Containter } from '../Container/Containter';
import { SectionTop } from '../UI/SectionTop/SectionTop';
import { ProductCard } from '../ProductCard/ProductCard';
import styles from './PopularProducts.module.scss';

import { products } from '../../data/productsData';
import { popularProducts } from '../../data/popularProductsData';

export const PopularProducts = () => {
  return (
    <Containter>
      <SectionTop title="Popular Products" to="/" />
      <ul className={styles.productsList}>
        {popularProducts.map((product) => (
          <li className={styles.productsItem} key={product.id}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </Containter>
  );
};
