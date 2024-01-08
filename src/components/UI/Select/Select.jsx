import { useState, useEffect, useRef } from 'react';
import styles from './Select.module.scss';

export const Select = ({ options, activeType, handleChangeType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const handleToggleSelect = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOnOption = (e) => {
    handleChangeType(e);
    setIsOpen(false);
  };

  const clickOutsideHandler = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
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

  return (
    <div
      ref={ref}
      className={`${styles.select} ${isOpen ? styles.active : ''}`}
    >
      <button
        onClick={handleToggleSelect}
        className={styles.selectedTitle}
        type="button"
      >
        Sort by: {activeType}
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
          ></path>
        </svg>
      </button>
      <ul className={styles.options}>
        {options.map((option) => (
          <li key={option}>
            <button
              onClick={handleClickOnOption}
              className={`${styles.option} ${activeType === option ? styles.active : ''}`}
              type="button"
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
