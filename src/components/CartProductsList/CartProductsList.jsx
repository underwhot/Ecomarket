import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectCartProducts,
  selectTotalAmount,
  selectTotalPrice,
} from '../../redux/slices/cartSlice';

import { Container } from '../Container/Container';
import { CartProduct } from './CartProduct';

import styles from './CartProductsList.module.scss';

export const CartProductsList = () => {
  const products = useSelector(selectCartProducts);
  const totalPrice = useSelector(selectTotalPrice);

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
              {products.map((product) => (
                <CartProduct {...product} key={product.id} />
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.cartTotal}>
          <div className={styles.cartTotalTitle}>Cart Total</div>
          <ul className={styles.cartTotalList}>
            <li className={styles.cartSubtotal}>
              <div className={styles.cartSubtitle}>Subtotal:</div>
              <div className={styles.cartCost}>$ {totalPrice.toFixed(2)}</div>
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
                ${(totalPrice < 15 ? 15 + totalPrice : totalPrice).toFixed(2)}
              </div>
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
