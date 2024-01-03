import { StarRating } from '../UI/StarRating/StarRating';
import styles from './Testimonial.module.scss';

export const Testimonial = ({ name, text, imgUrl, rating, position }) => {
  return (
    <div className={styles.testimonial}>
      <svg
        width="32"
        height="26"
        viewBox="0 0 32 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.8222 0C20.4357 0 17.6851 2.65696 17.6851 5.9336C17.6851 9.20821 20.4357 11.8672 23.8222 11.8672C29.6404 11.8672 26.2689 22.171 18.931 23.2443C18.5848 23.2936 18.2688 23.4578 18.0403 23.7071C17.8117 23.9563 17.6857 24.2742 17.6851 24.6032C17.6851 25.4456 18.487 26.1119 19.3751 25.9843C32.7122 24.0847 37.4546 0.00202497 23.8222 0.00202497V0ZM6.13933 0C2.74847 0 0 2.65493 0 5.9336C0 9.20619 2.74847 11.8631 6.13933 11.8631C11.9553 11.8631 8.58385 22.171 1.24597 23.2443C0.900119 23.2936 0.58443 23.4575 0.355931 23.7063C0.127431 23.9551 0.00118682 24.2725 0 24.6011C0 25.4436 0.801907 26.1098 1.68788 25.9823C15.0293 24.0827 19.7717 0 6.13933 0Z"
          fill="#00B307"
        />
      </svg>
      <p className={styles.text}>{text}</p>
      <div className={styles.info}>
        <div className={styles.avatar + ' ' + 'ibg'}>
          <img src={imgUrl} alt="Avatar" />
        </div>
        <div className={styles.personInfo}>
          <div className={styles.name}>{name}</div>
          <div className={styles.position}>{position}</div>
        </div>
        <div className={styles.rating}>
          <StarRating rating={rating} size={16} />
        </div>
      </div>
    </div>
  );
};
