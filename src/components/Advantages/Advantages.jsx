import { Container } from '../Container/Container';
import styles from './Advantages.module.scss';

import shipping from '/public/img/advantages/shipping.svg';
import support from '/public/img/advantages/support.svg';
import secure from '/public/img/advantages/secure.svg';
import guarantee from '/public/img/advantages/guarantee.svg';

export const Advantages = () => {
  return (
    <Container>
      <div className={styles.root}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.image}>
              <img src={shipping} alt="shipping" />
            </div>
            <div className={styles.text}>
              <h2 className={styles.title}>Free Shipping</h2>
              <p className={styles.desc}>Free shipping on all your order</p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.image}>
              <img src={support} alt="support" />
            </div>
            <div className={styles.text}>
              <h2 className={styles.title}>Customer Support 24/7</h2>
              <p className={styles.desc}>Instant access to Support</p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.image}>
              <img src={secure} alt="secure" />
            </div>
            <div className={styles.text}>
              <h2 className={styles.title}>100% Secure Payment</h2>
              <p className={styles.desc}>We ensure your money is save</p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.image}>
              <img src={guarantee} alt="guarantee" />
            </div>
            <div className={styles.text}>
              <h2 className={styles.title}>Money-Back Guarantee</h2>
              <p className={styles.desc}>30 Days Money-Back Guarantee</p>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
};
