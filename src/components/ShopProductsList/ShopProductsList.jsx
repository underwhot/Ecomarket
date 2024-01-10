import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchProducts,
  selectIsLoadingViaAPI,
  selectProducts,
} from '../../redux/slices/productsSlice';
import {
  selectSearchRequest,
  selectSort,
  setSort,
  setClearAllFilters,
} from '../../redux/slices/filterSlice';

import Pagination from '@mui/material/Pagination';
import { Container } from '../Container/Container';
import { ProductCard } from '../ProductCard/ProductCard';
import { Select } from '../UI/Select/Select';
import { ProductCardSkeleton } from '../ProductCard/ProductCardSkeleton';
import { EmptyProductsList } from './EmptyProductsList';

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
  const [shownProducts, setShownProducts] = useState([]);
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });
  const sortType = useSelector(selectSort);
  const products = useSelector(selectProducts);
  const searchRequest = useSelector(selectSearchRequest);
  const isLoading = useSelector(selectIsLoadingViaAPI);
  const dispatch = useDispatch();

  useEffect(() => {
    handleFetchProducts();
  }, [sortType, searchRequest]);

  const handleFetchProducts = () => {
    let sort = '';
    let order = 'order=asc';
    let search = '';

    if (sortType.includes('Price')) {
      sort = 'sortBy=price';
    } else if (sortType.includes('Rating')) {
      sort = 'sortBy=rating';
    }

    if (sortType.includes('desc')) {
      order = 'order=desc';
    }

    if (searchRequest) {
      search = `search=${searchRequest}`;
    }

    dispatch(
      fetchProducts(
        `https://654fb2ee358230d8f0cda05a.mockapi.io/products?${sort}&${order}&${search}`
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
    dispatch(setSort(e.target.textContent));
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

  const renderClearBtn =
    searchRequest || sortType !== 'Latest' ? (
      <div className={styles.search}>
        <button onClick={() => dispatch(setClearAllFilters())} type="button">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.469668 0.469672C0.76256 0.176777 1.23743 0.176776 1.53033 0.469668L5.00002 3.93934L8.46967 0.469672C8.76256 0.176777 9.23743 0.176776 9.53033 0.469668C9.82322 0.762561 9.82322 1.23743 9.53033 1.53033L6.06068 5L9.53033 8.46967C9.82322 8.76257 9.82322 9.23744 9.53033 9.53033C9.23743 9.82322 8.76256 9.82322 8.46967 9.53033L5.00002 6.06066L1.53033 9.53033C1.23743 9.82322 0.762561 9.82322 0.469668 9.53033C0.176776 9.23743 0.176777 8.76256 0.469672 8.46967L3.93936 5L0.469672 1.53033C0.176777 1.23744 0.176776 0.762566 0.469668 0.469672Z"
              fill="#9A9CAA"
            />
          </svg>
          Clear filters
        </button>
      </div>
    ) : null;

  return (
    <div className={styles.products}>
      <Container>
        <div className={styles.top}>
          <div className={styles.results}>
            <span>{products.length}</span> Results found
          </div>

          <div className={styles.clearFiltersBtn}>{renderClearBtn}</div>

          <div className={styles.filters}>
            <div className={styles.filter}>
              <Select
                options={sortTypes}
                activeType={sortType}
                handleChangeType={handleChangeSortType}
              />
            </div>
          </div>
        </div>

        <ul className={styles.productsList}>
          {isLoading ? (
            preloader
          ) : products.length > 0 ? (
            renderProducts
          ) : (
            <EmptyProductsList request={searchRequest} />
          )}
        </ul>
        {products.length > pageSize ? (
          <div className={styles.pagination}>
            <Pagination
              count={Math.ceil(products.length / pageSize)}
              onChange={hanglePagination}
            />
          </div>
        ) : null}
      </Container>
    </div>
  );
};
