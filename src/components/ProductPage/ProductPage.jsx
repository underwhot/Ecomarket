import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setAddProduct } from '../../redux/slices/cartSlice';
import {
  selectFavouritesProducts,
  setToggleToFavourites,
} from '../../redux/slices/favouritesSlice';
import { isItemInArr } from '../../utils/isItemInArr';

import { Container } from '../Container/Container';
import { StarRating } from '../UI/StarRating/StarRating';

import styles from './ProductPage.module.scss';

export const ProductPage = ({
  id,
  imgUrl,
  oldPrice,
  price,
  rating,
  title,
  description,
  category,
}) => {
  const [amount, setAmount] = useState(1);
  const productsInFav = useSelector(selectFavouritesProducts);
  const dispatch = useDispatch();

  let salePercent;
  if (oldPrice) {
    salePercent = Math.round((1 - price / oldPrice) * 100);
  }

  const handleClickOnPlus = () => {
    setAmount((prev) => prev + 1);
  };

  const handleClickOnMinus = () => {
    setAmount((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    dispatch(
      setAddProduct({
        id,
        title,
        imgUrl,
        price,
        oldPrice,
        rating,
        amount,
      })
    );

    setAmount(1);
  };

  const handleAddToFavourite = (e) => {
    dispatch(
      setToggleToFavourites({
        id,
        title,
        imgUrl,
        price,
        oldPrice,
        rating,
        amount: 1,
      })
    );
  };

  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.image + ' ' + 'ibg'}>
              <img src={imgUrl} alt={title} />
            </div>
          </div>
          <div className={styles.column}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.rating}>
              <StarRating rating={rating} size={18} />
            </div>

            <div className={styles.costInfo}>
              <div className={styles.currentPrice}>
                ${price && price.toFixed(2)}
              </div>
              {oldPrice ? (
                <>
                  <div className={styles.oldPrice}>
                    ${oldPrice && oldPrice.toFixed(2)}
                  </div>
                  <div className={styles.saleOff}>{salePercent}% Off</div>
                </>
              ) : null}
            </div>
            <p className={styles.desctiption}>{description}</p>

            <div className={styles.actions}>
              <div className={styles.counter}>
                <button
                  disabled={amount === 1 ? true : false}
                  onClick={handleClickOnMinus}
                  type="button"
                  className={styles.counterBtn}
                >
                  -
                </button>
                <div className={styles.counterNumber}>{amount}</div>
                <button
                  onClick={handleClickOnPlus}
                  type="button"
                  className={styles.counterBtn}
                >
                  +
                </button>
              </div>
              <div className={styles.buttons}>
                <button
                  onClick={handleAddToCart}
                  type="button"
                  className={styles.addToCartBtn}
                >
                  <span>Add to Cart</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.99961 2.15001C7.51765 2.15001 6.31628 3.35138 6.31628 4.83334V6.68334H11.6829V4.83334C11.6829 3.35138 10.4816 2.15001 8.99961 2.15001ZM12.9829 6.68334V4.83334C12.9829 2.63341 11.1995 0.850006 8.99961 0.850006C6.79968 0.850006 5.01628 2.63341 5.01628 4.83334V6.68334H3.16628C2.85215 6.68334 2.58296 6.90799 2.52677 7.21706L0.860099 16.3837C0.825621 16.5734 0.877078 16.7685 1.00058 16.9165C1.12407 17.0645 1.30687 17.15 1.49961 17.15H16.4996C16.6924 17.15 16.8752 17.0645 16.9987 16.9165C17.1222 16.7685 17.1736 16.5734 17.1391 16.3837L15.4725 7.21706C15.4163 6.90799 15.1471 6.68334 14.8329 6.68334H12.9829ZM11.6829 7.98334V9.83334C11.6829 10.1923 11.974 10.4833 12.3329 10.4833C12.6919 10.4833 12.9829 10.1923 12.9829 9.83334V7.98334H14.2905L15.7208 15.85H2.27845L3.70876 7.98334H5.01628V9.83334C5.01628 10.1923 5.3073 10.4833 5.66628 10.4833C6.02527 10.4833 6.31628 10.1923 6.31628 9.83334V7.98334H11.6829Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleAddToFavourite}
                  type="button"
                  className={`${styles.addToFavBtn} ${
                    isItemInArr(id, productsInFav) ? styles.inFav : ''
                  }`}
                >
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.9997 15.6855C6.13324 13.4902 3.97019 11.3021 2.92292 9.39486C1.85361 7.44745 1.94189 5.7954 2.54315 4.61581C3.77496 2.19916 7.27982 1.42596 9.41138 4.12187L9.99966 4.8659L10.588 4.1219C12.7199 1.4259 16.225 2.19921 17.4567 4.61581C18.058 5.79539 18.1462 7.44743 17.0769 9.39484C16.0295 11.3021 13.8663 13.4902 9.9997 15.6855ZM9.99973 2.53756C7.09998 -0.286559 2.78107 0.846001 1.20675 3.93462C0.349672 5.61608 0.33375 7.79602 1.6081 10.1168C2.87218 12.4189 5.39844 14.8588 9.63689 17.2015L9.99969 17.402L10.3625 17.2015C14.6011 14.8588 17.1275 12.4189 18.3917 10.1168C19.6661 7.79605 19.6502 5.6161 18.7931 3.93462C17.2188 0.845947 12.8997 -0.28652 9.99973 2.53756Z"
                      fill="#2C742F"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className={styles.info}>
              <div className={styles.categoryTitle}>Category:</div>
              <span className={styles.categoryValue}>{category}</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
