import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { MobileDropdown } from '../MobileDropdown/MobileDropdown';

import styles from './MobileMenuItems.module.scss';

export const MobileMenuItems = ({
  items,
  depthLevel,
  showMenu,
  setShowMenu
}) => {
  const { pathname } = useLocation();
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    dropdown && setDropdown(false);
    showMenu && setShowMenu(false);
  }, [pathname]);

  const toggleDropdownHandler = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <li className={styles.item}>
      {items.submenu ? (
        <>
          <button
            onClick={toggleDropdownHandler}
            className={`${styles.button} ${dropdown ? styles.active : ''}`}
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
          >
            {items.title}
            <svg
              width="16"
              height="12"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.1963 1.13634C10.9035 0.843448 10.4286 0.843448 10.1357 1.13634L5.99935 5.27268L1.86301 1.13634C1.57012 0.843448 1.09525 0.843448 0.802352 1.13634C0.509459 1.42923 0.509459 1.90411 0.802352 2.197L5.46902 6.86367C5.76191 7.15656 6.23679 7.15656 6.52968 6.86367L11.1963 2.197C11.4892 1.90411 11.4892 1.42923 11.1963 1.13634Z"
                fill="#666666"
              />
            </svg>
          </button>
          <MobileDropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={items.url} className={styles.link}>
          {items.title}
        </Link>
      )}
    </li>
  );
};
