import { LinkBtn } from '../UI/LinkBtn/LinkBtn';
import styles from './BannerBig.module.scss';
import bg from '/public/img/banners/BannerBig_01.jpg';

export const BannerBig = () => {
  return (
    <div className={`${styles.banner} ibg`}>
      <img src={bg} alt="banner" />
      <div className={styles.content}>
        <h2 className={styles.title}>Fresh & Healthy Organic Food</h2>
        <div className={styles.text}>
          <h3 className={styles.subtitle}>
            Sale up to <span>30% OFF</span>
          </h3>
          <p className={styles.desc}>Free shipping on all your order.</p>
        </div>
        <LinkBtn to="/" text="Shop now" color="white" />
      </div>
    </div>
  );
};
