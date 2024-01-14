import { LinkBtn } from '../UI/LinkBtn/LinkBtn';
import styles from './FavouritesEmpty.module.scss';

export const FavouritesEmpty = () => {
  return (
    <div className={styles.empty}>
      <div className={styles.image}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="240"
          height="100%"
          version="1.1"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
        >
          <path
            fill="#00b207"
            opacity={0.5}
            d="M467.204 67.921C412.786 20.394 329.86 25.984 282.31 80.365l-26.311 29.66-26.311-29.66C182.138 25.984 99.212 20.396 44.795 67.921c-54.437 47.543-60.045 130.51-12.503 184.946l185.641 206.535A51.257 51.257 0 00256 476.37a51.257 51.257 0 0038.067-16.968L479.546 253.05l.161-.182c47.544-54.437 41.934-137.404-12.503-184.947z"
          ></path>
          <path
            fill="#2c742f"
            d="M467.204 67.921C412.786 20.394 329.86 25.984 282.31 80.365l-26.311 29.66v366.346c14.5 0 28.375-6.185 38.067-16.968L479.545 253.05l.161-.182c47.545-54.437 41.935-137.404-12.502-184.947z"
          ></path>
        </svg>
      </div>
      <div className={styles.title}>Favourites is empty</div>
      <p className={styles.text}>
        Hold on to your hats, your Favourites list is about to take a wild ride!
        Buckle up and start adding some treasures.
      </p>
      <LinkBtn url="/shop" text="Go shopping" color="green" arrow={false} />
    </div>
  );
};
