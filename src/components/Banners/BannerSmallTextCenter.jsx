import styles from './BannerSmallTextCenter.module.scss';
import bg from '../../assets/banners/BannerSmall_02.jpg';
import { LinkBtn } from '../UI/LinkBtn/LinkBtn';

export const BannerSmallTextCenter = () => {
  return (
    <div className={`${styles.banner} ibg`}>
      <img src={bg} alt="banner" />
      <div className={styles.content}>
        <p className={styles.desc}>Best Deal</p>
        <h2 className={styles.title}>Special Products Deal of the Month</h2>
        <LinkBtn to="/" text="Shop now" />
      </div>
    </div>
  );
};
