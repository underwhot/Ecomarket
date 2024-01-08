import { Link } from 'react-router-dom';
import styles from './LinkBtn.module.scss';

export const LinkBtn = ({ url, text, color, arrow = true }) => {
  let clazz = styles.transparent;

  if (color === 'white') {
    clazz = styles.white;
  } else if (color === 'green') {
    clazz = styles.green;
  }

  return (
    <Link to={url} className={`${styles.link} ${clazz}`}>
      {text}
      {arrow && (
        <svg
          width="18"
          height="15"
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.75 7.50055C0.75 7.08634 1.08579 6.75055 1.5 6.75055H16.5C16.9142 6.75055 17.25 7.08634 17.25 7.50055C17.25 7.91476 16.9142 8.25055 16.5 8.25055H1.5C1.08579 8.25055 0.75 7.91476 0.75 7.50055Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.91854 0.946338C10.2108 0.652815 10.6857 0.651792 10.9792 0.944054L17.0292 6.96805C17.1705 7.10879 17.25 7.30003 17.25 7.49949C17.25 7.69896 17.1706 7.8902 17.0292 8.03095L10.9792 14.056C10.6857 14.3482 10.2109 14.3473 9.91859 14.0538C9.6263 13.7603 9.62728 13.2854 9.92078 12.9931L15.4371 7.49957L9.92083 2.007C9.6273 1.71473 9.62628 1.23986 9.91854 0.946338Z"
            fill="black"
          />
        </svg>
      )}
    </Link>
  );
};
