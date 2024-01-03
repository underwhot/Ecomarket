import styles from './Containter.module.scss';

export const Containter = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
