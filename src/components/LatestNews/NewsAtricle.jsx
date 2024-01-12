import { Link } from 'react-router-dom';
import { LinkBtn } from '../UI/LinkBtn/LinkBtn';
import styles from './NewsAtricle.module.scss';

export const NewsAtricle = ({ url, title, imgUrl, date, text }) => {
  const day = date.slice(9, 11);
  const month = date.slice(5, 8);

  const slicedText = text.length > 98 ? text.slice(0, 97) + '...' : text;

  return (
    <div className={styles.article}>
      <Link to={url} className={styles.image + ' ' + 'ibg'}>
        <img src={imgUrl} alt={title} />
        <div className={styles.date}>
          <div className={styles.day}>{day}</div>
          <div className={styles.month}>{month}</div>
        </div>
      </Link>
      <Link to={url} className={styles.title}>
        {title}
      </Link>
      <p className={styles.text}>{slicedText}</p>
      <LinkBtn text="Read More" url={url} />
    </div>
  );
};
