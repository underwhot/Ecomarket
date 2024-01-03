import { useRef, useState } from 'react';
import styles from './SearchBar.module.scss';

import cross from '../../assets/icons/cross.svg';

export const SearchBar = ({ showSearch, setShowSearch }) => {
  const [searchInput, setSearchInput] = useState('');
  const ref = useRef(null);

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const clearSearchInputHandler = () => {
    setSearchInput('');
    ref.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div
        onClick={() => setShowSearch(false)}
        className={`${styles.background} ${showSearch ? styles.active : ''}`}
      ></div>
      <form onSubmit={(e) => handleSubmit(e)} className={`${styles.form} ${showSearch ? styles.active : ''}`}>
        <div className={styles['form__input-wrapper']}>
          <input
            ref={ref}
            onChange={searchInputHandler}
            value={searchInput}
            className={styles['form__input']}
            type="text"
            name="search"
            placeholder="Search"
            autoComplete="off"
          />
          {searchInput.length > 0 ? (
            <img onClick={clearSearchInputHandler} src={cross} alt="cross" />
          ) : null}
        </div>
        <button className={styles['form__button']} type="submit">
          Search
        </button>
      </form>
    </>
  );
};
