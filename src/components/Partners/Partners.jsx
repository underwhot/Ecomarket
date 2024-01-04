import { Container } from '../Container/Container';
import styles from './Partners.module.scss';

import steps from '../../assets/partners/steps.svg';
import mango from '../../assets/partners/mango.svg';
import foodNetwork from '../../assets/partners/foodNetwork.svg';
import foodUk from '../../assets/partners/foodUk.svg';
import bookOff from '../../assets/partners/bookOff.svg';
import gSeries from '../../assets/partners/gSeries.svg';

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
