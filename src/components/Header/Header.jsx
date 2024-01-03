import { HeaderTop } from './HeaderTop/HeaderTop';
import { HeaderBottom } from './HeaderBottom/HeaderBottom';

import React, { useState, useEffect } from 'react';

import styles from './Header.module.scss';

export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setIsVisible(scrollPosition > currentPosition || currentPosition < 200);
    setScrollPosition(currentPosition);

  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <header className={`${styles.header} ${isVisible && styles.show}`}>
      <HeaderTop />
      <HeaderBottom isVisible={isVisible}/>
    </header>
  );
};
