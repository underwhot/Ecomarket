import { Link } from 'react-router-dom';
import styles from './Logotype.module.scss';
import logo from '../../assets/logo.svg';

export const Logotype = ({color = "dark-green", hideText = false, zIndex = '0' }) => {
  return (
    <Link to="/" className={styles.logo} style={{zIndex: zIndex}}>
      <img src={logo} alt="logotype" />
      <span className={`${styles.logoText} ${color} ${hideText ? styles.hideText : ''}`}>Ecobazar</span>
    </Link>
  );
};
