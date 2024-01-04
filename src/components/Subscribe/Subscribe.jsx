import { Container } from '../Container/Container';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { SubscribeForm } from '../SubscribeForm/SubscribeForm';
import styles from './Subscribe.module.scss';

export const Subscribe = () => {
  return (
    <section className={styles.subscribe}>
      <Container >
        <div className={styles.row}>
          <div className={styles.column}>
            <h2 className={styles.title}>Subcribe our Newsletter</h2>
            <p className={styles.text}>
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </p>
          </div>
          <div className={styles.column}>
            <div className={styles.form}>
              <SubscribeForm />
            </div>
            <div className={styles.social}>
              <SocialLinks />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
