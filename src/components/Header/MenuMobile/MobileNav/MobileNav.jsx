import { useEffect, useState } from 'react';
import { MobileMenuItems } from '../MobileMenuItems/MobileMenuItems';
import { menuItemsData } from '../../../../data/menuItemsData';

import styles from './MobileNav.module.scss';

export const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const depthLevel = 0;

  useEffect(() => {
    const handleScroll = (e) => {
      if (showMenu) {
        e.preventDefault();
      }
    };

    if (showMenu) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('scroll', handleScroll, { passive: false });
    } else {
      document.body.style.overflow = 'auto';
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showMenu]);

  return (
    <div className={styles.mobileMenu}>
      <button
        type="button"
        onClick={() => setShowMenu((prev) => !prev)}
        className={`${styles['icon-menu']} ${
          showMenu ? styles['menu-open'] : ''
        }`}
      >
        <span></span>
      </button>

      <div
        className={`${styles.background} ${showMenu ? styles.active : ''}`}
        onClick={() => setShowMenu(false)}
      ></div>

      <nav className={`${styles.menuBody} ${showMenu ? styles.active : ''}`}>
        <ul>
          {menuItemsData.map((item, i) => {
            return (
              <MobileMenuItems
                items={item}
                key={i}
                depthLevel={depthLevel}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
