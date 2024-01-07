import { Container } from '../Container/Container';
import styles from './Partners.module.scss';

import steps from '/public/img/partners/steps.svg';
import mango from '/public/img/partners/mango.svg';
import foodNetwork from '/public/img/partners/foodNetwork.svg';
import foodUk from '/public/img/partners/foodUk.svg';
import bookOff from '/public/img/partners/bookOff.svg';
import gSeries from '/public/img/partners/gSeries.svg';

export const Partners = () => {
  return (
    <Container>
      <ul className={styles.partnersList}>
        <li className={styles.partnersItem}><img src={steps} alt="logotype" /></li>
        <span className={styles.stick}></span>
        <li className={styles.partnersItem}><img src={mango} alt="logotype" /></li>
        <span className={styles.stick}></span>
        <li className={styles.partnersItem}><img src={foodNetwork} alt="logotype" /></li>
        <span className={styles.stick}></span>
        <li className={styles.partnersItem}><img src={foodUk} alt="logotype" /></li>
        <span className={styles.stick}></span>
        <li className={styles.partnersItem}><img src={bookOff} alt="logotype" /></li>
        <span className={styles.stick}></span>
        <li className={styles.partnersItem}><img src={gSeries} alt="logotype" /></li>
      </ul>
    </Container>
  );
};
