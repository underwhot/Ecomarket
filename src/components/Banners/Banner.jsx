import { LinkBtn } from '../UI/LinkBtn/LinkBtn';
import styles from './Banner.module.scss';

export const Banner = ({
  id,
  title,
  subtitle,
  url,
  imgUrl,
  offer,
  sale,
  text,
}) => {
  return (
    <div className={styles.banner}>
      <div className={styles.column}>
        <div className={styles.content} data-swiper-parallax-scale="0.5">
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.subtitle}>{subtitle}</h3>
          <p className={styles.offer}>
            {offer} <span>{sale}</span>
          </p>
          <p className={styles.text}>{text}</p>
          <div>
            <LinkBtn text="Shop now" url={url} color="green" />
          </div>
        </div>
      </div>
      <div className={styles.column}>
        <div
          className={styles.image + ' ' + 'ibg'}
          data-swiper-parallax-opacity="0"
          data-swiper-parallax-scale="0.5"
        >
          <img src={imgUrl} alt="image" />
        </div>
      </div>
    </div>
  );
};
