import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './SearchBar.module.scss';

import cross from '/img/icons/cross.svg';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectSearchValue,
  setSearchValue,
  setSearchRequest,
  setClearSearchRequest,
} from '../../redux/slices/filterSlice';

export const SearchBar = ({ showSearch, setShowSearch }) => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearchValue);
  const ref = useRef(null);
  const navigate = useNavigate();

  const searchInputHandler = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  const clearSearchInputHandler = () => {
    dispatch(setClearSearchRequest());
    ref.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue.trim()) {
      dispatch(setSearchRequest(searchValue.trim()));
      navigate('/shop');
      setShowSearch(false);
      return;
    }

    ref.current.focus();
  };

  return (
    <>
      <div
        onClick={() => setShowSearch(false)}
        className={`${styles.background} ${showSearch ? styles.active : ''}`}
      ></div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={`${styles.form} ${showSearch ? styles.active : ''}`}
      >
        <div className={styles['form__input-wrapper']}>
          <input
            ref={ref}
            onChange={searchInputHandler}
            value={searchValue}
            className={styles['form__input']}
            type="text"
            name="search"
            placeholder="Search"
            autoComplete="off"
          />
          {searchValue.length > 0 ? (
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
