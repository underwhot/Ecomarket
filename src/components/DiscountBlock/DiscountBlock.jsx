import { Container } from '../Container/Container';
import { LinkBtn } from '../UI/LinkBtn/LinkBtn';
import styles from './DiscountBlock.module.scss';
import bg from '/img/discountBlock/Discount Bannar.jpg';

export const DiscountBlock = () => {
  return (
    <Container>
      <div className={styles.block + ' ' + 'ibg'}>
        <img src={bg} alt="vegetables" />
        <div className={styles.content}>
          <h2 className={styles.title}>Summer Sale</h2>
          <div className={styles.percents}>
            <span>37%</span> OFF
          </div>
          <p className={styles.text}>
            Free on all your order, Free Shipping and 30 days money-back
            guarantee
          </p>
          <LinkBtn url="/shop" text="Shop now" color="green" />
        </div>
      </div>
    </Container>
  );
};
