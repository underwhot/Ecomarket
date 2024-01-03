import { Link } from 'react-router-dom';
import styles from './Category.module.scss';

export const Category = ({ url, title, imgUrl }) => {
  return (
      <Link to={url} className={styles.link}>
        <div className={`${styles.image} ibg`}>
          <img src={imgUrl} alt={title} />
        </div>
        {title}
      </Link>
  );
};
