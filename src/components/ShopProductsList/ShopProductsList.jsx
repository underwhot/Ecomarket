import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchProducts,
  selectIsLoadingViaAPI,
  selectProducts,
} from '../../redux/slices/productsSlice';

import { Container } from '../Container/Container';
import { ProductCard } from '../ProductCard/ProductCard';
import { Select } from '../UI/Select/Select';
import { ProductCardSkeleton } from '../ProductCard/ProductCardSkeleton';
import Pagination from '@mui/material/Pagination';

import styles from './ShopProductsList.module.scss';

const sortTypes = [
  'Latest',
  'Price (asc)',
  'Price (desc)',
  'Rating (asc)',
  'Rating (desc)',
];
// const shownAmount = [];
const pageSize = 12;

export const ShopProductsList = () => {
  const [sortType, setSortType] = useState(sortTypes[0]);
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
  }, [sortType]);

  const handleFetchProducts = () => {
    let sort = '';
    let order = 'order=asc';

    if (sortType.includes('Price')) {
      sort = 'sortBy=price';
    } else if (sortType.includes('Rating')) {
      sort = 'sortBy=rating';
    }

    if (sortType.includes('desc')) {
      order = 'order=desc';
    }

    dispatch(
      fetchProducts(
        `https://654fb2ee358230d8f0cda05a.mockapi.io/products?${sort}&${order}`
      )
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
    window.scrollTo(0, 0);
  };

  const handleChangeSortType = (e) => {
    setSortType(e.target.textContent);
  };

  const renderProducts = shownProducts.map((product) => (
    <li className={styles.productsItem} key={product.id}>
      <ProductCard {...product} />
    </li>
  ));

  const preloader = new Array(pageSize).fill(null).map((_, i) => (
    <li className={styles.productsItem} key={i}>
      <ProductCardSkeleton />
    </li>
  ));

  return (
    <div className={styles.products}>
      <Container>
        <div className={styles.top}>
          <div className={styles.results}>
            <span>{products.length}</span> Results found
          </div>
          <div className={styles.filters}>
            <Select
              options={sortTypes}
              activeType={sortType}
              handleChangeType={handleChangeSortType}
            />
          </div>
        </div>

        <ul className={styles.productsList}>
          {isLoading ? preloader : renderProducts}
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
