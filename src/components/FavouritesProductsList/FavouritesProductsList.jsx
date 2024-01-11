import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavouritesProducts,
  setClearFavourites,
} from '../../redux/slices/favouritesSlice';

import { Container } from '../Container/Container';
import { FavouriteProduct } from './FavouriteProduct';
import { SectionTop } from '../UI/SectionTop/SectionTop';

import styles from './FavouritesProductsList.module.scss';
import { FavouritesEmpty } from './FavouritesEmpty';

export const FavouritesProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectFavouritesProducts);

  return (
    <Container>
      <SectionTop title="My Favourites List" />
      <>
        {products.length > 0 ? (
          <div className={styles.products}>
            <div className={styles.productsTable}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th colSpan="2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <FavouriteProduct {...product} key={product.id} />
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="2">
                      <Link to="/shop" className={styles.tableFooterLink}>
                        Return to shop
                      </Link>
                    </td>
                    <td colSpan="2" className={styles.tableFooterCallLast}>
                      <button
                        onClick={() => dispatch(setClearFavourites())}
                        className={styles.tableFooterBtn}
                        type="button"
                      >
                        Clear favourites
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        ) : (
          <FavouritesEmpty />
        )}
      </>
    </Container>
  );
};
