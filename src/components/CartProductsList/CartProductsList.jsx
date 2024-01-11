import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartProducts,
  selectTotalPrice,
  setClearCart,
} from '../../redux/slices/cartSlice';

import { Container } from '../Container/Container';
import { CartProduct } from './CartProduct';
import { CartEmpty } from './CartEmpty';
import { SectionTop } from '../UI/SectionTop/SectionTop';

import styles from './CartProductsList.module.scss';

export const CartProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectCartProducts);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <Container>
      <SectionTop title="My Shopping Cart" />
      {products.length > 0 ? (
        <>
          <div className={styles.products}>
            <div className={styles.productsTable}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>price</th>
                    <th>Quantity</th>
                    <th colSpan="2">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <CartProduct {...product} key={product.id} />
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="2">
                      <Link to="/shop" className={styles.tableFooterLink}>
                        Return to shop
                      </Link>
                    </td>
                    <td colSpan="3" className={styles.tableFooterCallLast}>
                      <button
                        onClick={() => dispatch(setClearCart())}
                        className={styles.tableFooterBtn}
                        type="button"
                      >
                        Clear cart
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className={styles.cartTotal}>
              <div className={styles.cartTotalTitle}>Cart Total</div>
              <ul className={styles.cartTotalList}>
                <li className={styles.cartSubtotal}>
                  <div className={styles.cartSubtitle}>Subtotal:</div>
                  <div className={styles.cartCost}>
                    $ {totalPrice.toFixed(2)}
                  </div>
                </li>
                <li className={styles.cartShipping}>
                  <div className={styles.cartSubtitle}>Shipping:</div>
                  <div className={styles.cartCost}>
                    {totalPrice < 15 ? '$' + Number(15).toFixed(2) : 'Free'}
                  </div>
                </li>
                <li className={styles.cartTotalItem}>
                  <div className={styles.cartTotalPrice}>Total:</div>
                  <div className={styles.cartTotalCost}>
                    $
                    {(totalPrice < 15 ? 15 + totalPrice : totalPrice).toFixed(
                      2
                    )}
                  </div>
                </li>
              </ul>
              <Link to="/" className={styles.cartLink}>
                Proceed to checkout
              </Link>
            </div>
          </div>
        </>
      ) : (
        <CartEmpty />
      )}
    </Container>
  );
};
