import { LinkBtn } from '../UI/LinkBtn/LinkBtn';
import styles from './BannerSmallTextLeft.module.scss';
import bg from '../../assets/banners/BannerSmall_01.jpg';

export const BannerSmallTextLeft = () => {
  return (
    <div className={`${styles.banner} ibg`}>
      <img src={bg} alt="banner" />
      <div className={styles.content}>
        <h2 className={styles.title}>Summer Sale</h2>
        <p className={styles.ofer}>75% OFF</p>
        <p className={styles.desc}>Only Fruit & Vegetable</p>
        <LinkBtn to="/" text="Shop now" />
      </div>
    </div>
  );
};
