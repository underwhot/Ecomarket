import styles from './EmptyProductsList.module.scss';

export const EmptyProductsList = ({request}) => {
  return (
    <div className={styles.page}>
      <div className={styles.title}>Oops! Nothing found on <span>"{request}"</span> request</div>
      <p className={styles.text}>
        Looks like these products have mastered the art of invisibility! But
        don't worry, we'll uncover their hiding spots and bring them back to
        center stage.
      </p>
    </div>
  );
};
