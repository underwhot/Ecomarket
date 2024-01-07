import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchProducts,
  selectIsLoadingViaAPI,
  selectProducts,
} from '../../redux/slices/productsSlice';

import { Container } from '../Container/Container';
import { ProductCard } from '../ProductCard/ProductCard';
import Pagination from '@mui/material/Pagination';

import styles from './ShopProductsList.module.scss';

const pageSize = 8;

export const ShopProductsList = () => {
  const [sortType, setSortType] = useState('');
  const [shownProducts, setShownProducts] = useState([]);
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoadingViaAPI);
  const dispatch = useDispatch();

  useEffect(() => {
    handleFetchProducts();
  }, []);

  const handleFetchProducts = () => {
    dispatch(
      fetchProducts({
        url: 'https://654fb2ee358230d8f0cda05a.mockapi.io/products',
      })
    );
  };

  useEffect(() => {
    const productsPaginated = products.slice(pagination.from, pagination.to);
    setShownProducts(productsPaginated);
  }, [pagination.from, pagination.to, products]);

  const hanglePagination = (e, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPagination({ ...pagination, from, to });
  };

  return (
    <div className={styles.products}>
      <Container>
        <div className={styles.top}>
          <div className={styles.results}>
            <span>{products.length}</span> Results found
          </div>
          <div className={styles.filter}>
            {/* <Select options={options} /> */}
          </div>
        </div>

        <ul className={styles.productsList}>
          {shownProducts.map((product) => (
            <li className={styles.productsItem} key={product.id}>
              <ProductCard {...product} />
            </li>
          ))}
        </ul>
        <div className={styles.pagination}>
          <Pagination
            count={Math.ceil(products.length / pageSize)}
            onChange={hanglePagination}
          />
        </div>
      </Container>
    </div>
  );
};
