import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Dropdown } from '../Dropdown/Dropdown';

import styles from './MenuItems.module.scss';

export const MenuItems = ({ items, depthLevel, isVisible }) => {
  const { pathname } = useLocation();
  const [dropdown, setDropdown] = useState(false);
  const menuItemRef = useRef(null);

  const clickOutsideHandler = (e) => {
    if (menuItemRef.current && !menuItemRef.current.contains(e.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickOutsideHandler);
    document.addEventListener('touchstart', clickOutsideHandler);

    return () => {
      document.removeEventListener('mousedown', clickOutsideHandler);
      document.removeEventListener('touchstart', clickOutsideHandler);
    };
  }, []);

  useEffect(() => {
    dropdown && setDropdown(false);
  }, [pathname]);

  useEffect(() => {
    if (!isVisible) {
      dropdown && setDropdown(false)
    }
  }, [isVisible])

  const onMouseEnterHandler = () => {
    setDropdown(true);
  };

  const onMouseLeaveHandler = () => {
    setDropdown(false);
  };

  const toggleDropdownHandler = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <li
      ref={menuItemRef}
      // onMouseEnter={onMouseEnterHandler}
      // onMouseLeave={onMouseLeaveHandler}
      className={styles.item}
    >
      {items.submenu ? (
        <>
          <button
            onClick={toggleDropdownHandler}
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            className={`${styles.link} ${dropdown ? styles.active : ''}`}
          >
            {items.title}
            {depthLevel > 0 ? (
              <span>&raquo;</span>
            ) : (
              <svg
                width="12"
                height="8"
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
            )}
          </button>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
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
