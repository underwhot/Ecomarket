import { Container } from '../Container/Container';

import styles from './ProductPageSkeleton.module.scss';

export const ProductPageSkeleton = () => {
  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.loader}></div>
      </div>
    </Container>
  )
}
