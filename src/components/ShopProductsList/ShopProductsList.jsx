import { useEffect, useState } from 'react';
import { Container } from '../Container/Container';
import { ProductCard } from '../ProductCard/ProductCard';
import Pagination from '@mui/material/Pagination';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import Select from 'react-select';

import styles from './ShopProductsList.module.scss';

import { products as allProducts } from '../../data/productsData';

const pageSize = 4;

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const ShopProductsList = () => {
  const [sortType, setSortType] = useState('');
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    const productsPaginated = allProducts.slice(pagination.from, pagination.to);
    setProducts(productsPaginated);
  }, [pagination.from, pagination.to]);

  const hanglePagination = (e, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPagination({ ...pagination, from, to });
  };

  const handleSortType = (e) => {
    setSortType(e.target.value);
  };

  return (
    <div className={styles.products}>
      <Container>
        <div className={styles.top}>
          <div className={styles.results}>
            <span>{allProducts.length}</span> Results found
          </div>
          <div className={styles.filter}>
            <Select options={options} />
          </div>
        </div>

        <ul className={styles.productsList}>
          {products.map((product) => (
            <li className={styles.productsItem} key={product.id}>
              <ProductCard {...product} />
            </li>
          ))}
        </ul>
        <div className={styles.pagination}>
          <Pagination
            count={Math.ceil(allProducts.length / pageSize)}
            onChange={hanglePagination}
          />
        </div>
      </Container>
    </div>
  );
};
