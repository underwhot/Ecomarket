import { Containter } from '../Container/Containter';
import { Logotype } from '../Logotype/Logotype';
import { footerItemsData } from '../../data/footerItemsData';
import { contactsData } from '../../data/contactsData';

import ApplePay from '../../assets/payments/ApplePay.svg';
import Visa from '../../assets/payments/Visa.svg';
import Discover from '../../assets/payments/Discover.svg';
import Mastercard from '../../assets/payments/Mastercard.svg';
import Card from '../../assets/payments/Card.svg';

import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Containter>
        <div className={styles.topRow}>
          <div className={styles.info}>
            <Logotype color="white" />
            <p className={styles.text}>
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <div className={styles.contacts}>
              <a
                href={`tel:${contactsData.mainPhoneNumberLink}`}
                className={styles.contactLink}
              >
                {contactsData.mainPhoneNumber}
              </a>
              <span>or</span>
              <a
                href={`mailto:${contactsData.mail}`}
                className={styles.contactLink}
              >
                {contactsData.mail}
              </a>
            </div>
          </div>
          <div className={styles.menu}>
            {footerItemsData.map((item) => (
              <MenuList
                title={item.title}
                submenu={item.submenu}
                key={item.title}
              />
            ))}
          </div>
        </div>

        <div className={styles.botRow}>
          <p className={styles.copy}>
            Ecobazar eCommerce © 2024. All Rights Reserved
          </p>
          <ul className={styles.paymentList}>
            <li>
              <img src={ApplePay} alt="ApplePay" />
            </li>
            <li>
              <img src={Visa} alt="Visa" />
            </li>
            <li>
              <img src={Discover} alt="Discover" />
            </li>
            <li>
              <img src={Mastercard} alt="Mastercard" />
            </li>
            <li>
              <img src={Card} alt="Card" />
            </li>
          </ul>
        </div>
      </Containter>
    </footer>
  );
};

const MenuList = ({ title, submenu }) => {
  return (
    <div className={styles.column}>
      <div className={styles.menuTitle}>{title}</div>
      <ul className={styles.menuList}>
        {submenu.map((item) => {
          return (
            <li className={styles.menuItem} key={item.subtitle}>
              <Link to={item.url} className={styles.menuLink}>
                {item.subtitle}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};