import { Link } from 'react-router-dom';
import { Container } from '../Container/Container';
import { CartProduct } from './CartProduct';
import styles from './CartProductsList.module.scss';

export const CartProductsList = () => {
  return (
    <Container>
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
              <CartProduct />
              <CartProduct />
              <CartProduct />
              <CartProduct />
            </tbody>
          </table>
        </div>
        <div className={styles.cartTotal}>
          <div className={styles.cartTotalTitle}>Cart Total</div>
          <ul className={styles.cartTotalList}>
            <li className={styles.cartSubtotal}>
              <div className={styles.cartSubtitle}>Subtotal:</div>
              <div className={styles.cartCost}>$84.00</div>
            </li>
            <li className={styles.cartShipping}>
              <div className={styles.cartSubtitle}>Shipping:</div>
              <div className={styles.cartCost}>Free</div>
            </li>
            <li className={styles.cartTotalItem}>
              <div className={styles.cartTotalPrice}>Total:</div>
              <div className={styles.cartTotalCost}>$84.00</div>
            </li>
          </ul>
          <Link to="/" className={styles.cartLink}>
            Proceed to checkout
          </Link>
        </div>
      </div>
    </Container>
  );
};
