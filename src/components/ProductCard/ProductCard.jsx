import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import {
  setToggleToCart,
  selectCartProducts,
} from '../../redux/slices/cartSlice';
import {
  selectFavouritesProducts,
  setToggleToFavourites,
} from '../../redux/slices/favouritesSlice';

import { StarRating } from '../UI/StarRating/StarRating';
import { isItemInArr } from '../../utils/isItemInArr';

import styles from './ProductCard.module.scss';

export const ProductCard = ({ id, title, imgUrl, price, oldPrice, rating }) => {
  const dispatch = useDispatch();
  const productsInCart = useSelector(selectCartProducts);
  const productsInFav = useSelector(selectFavouritesProducts);

  let salePercent;
  if (oldPrice) {
    salePercent = Math.round((1 - price / oldPrice) * 100);
  }

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(
      setToggleToCart({
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

  const handleAddToFavourite = (e) => {
    e.preventDefault();
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

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <Link
      to={`/shop/${id}`}
      className={`${styles.product} ${
        isItemInArr(id, productsInCart) ? styles.inCart : ''
      } ${isItemInArr(id, productsInFav) ? styles.inFav : ''}`}
    >
      {oldPrice ? (
        <span className={styles.sale}>Sale {salePercent}%</span>
      ) : null}
      <button
        type="button"
        className={styles.heart}
        onClick={handleAddToFavourite}
      >
        <svg
          width="18"
          height="16"
          viewBox="0 0 30 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.837 23.9397C8.46885 20.3611 4.8694 16.761 3.11967 13.5745C1.34726 10.3466 1.4668 7.54498 2.50556 5.50708C4.61237 1.3738 10.6172 0.0491047 14.2486 4.64202L14.8369 5.38606L15.4253 4.64206C19.0573 0.0490432 25.0624 1.37385 27.1691 5.50708C28.2079 7.54497 28.3274 10.3466 26.5548 13.5745C24.805 16.761 21.2053 20.3611 14.837 23.9397ZM14.837 3.02875C10.4266 -1.66517 3.61727 0.0230279 1.16916 4.82589C-0.125416 7.36566 -0.1726 10.6952 1.80485 14.2965C3.77204 17.879 7.73575 21.7303 14.4742 25.4547L14.837 25.6552L15.1998 25.4547C21.9384 21.7303 25.9023 17.8791 27.8696 14.2965C29.8472 10.6952 29.8001 7.36568 28.5056 4.82589C26.0574 0.0229702 19.2479 -1.66513 14.837 3.02875Z"
            fill="#1A1A1A"
          />
        </svg>
      </button>
      <div ref={ref} className={`${styles.image} ibg`}>
        {/* {inView ? <img src={imgUrl} alt={title} /> : <div className={styles.lazy}></div>} */}
        <img src={inView ? imgUrl : null} alt={title} />
      </div>
      <div className={styles.content}>
        <div className={styles.texts}>
          <div className={styles.title}>{title}</div>
          <div className={styles.price}>
            {price.toFixed(2)}$
            {oldPrice ? (
              <span className={styles.oldPrice}>{oldPrice.toFixed(2)}$</span>
            ) : null}
          </div>
          <StarRating rating={rating} />
        </div>
        <button
          type="button"
          className={styles.addToCartBtn}
          onClick={(e) => handleAddToCart(e)}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 28 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 1.5C11.2846 1.5 9.08334 3.70127 9.08334 6.41667V9.91667H18.9167V6.41667C18.9167 3.70127 16.7154 1.5 14 1.5ZM20.4167 9.91667V6.41667C20.4167 2.87284 17.5438 0 14 0C10.4562 0 7.58334 2.87284 7.58334 6.41667V9.91667H4.08334C3.72087 9.91667 3.41028 10.1759 3.34544 10.5325L0.512104 26.1158C0.472321 26.3346 0.531695 26.5598 0.674192 26.7306C0.81669 26.9013 1.02761 27 1.25001 27H26.75C26.9724 27 27.1833 26.9013 27.3258 26.7306C27.4683 26.5598 27.5277 26.3346 27.4879 26.1158L24.6546 10.5325C24.5897 10.1759 24.2791 9.91667 23.9167 9.91667H20.4167ZM18.9167 11.4167V14.9167C18.9167 15.3309 19.2525 15.6667 19.6667 15.6667C20.0809 15.6667 20.4167 15.3309 20.4167 14.9167V11.4167H23.2907L25.8513 25.5H2.14867L4.70927 11.4167H7.58334V14.9167C7.58334 15.3309 7.91913 15.6667 8.33334 15.6667C8.74755 15.6667 9.08334 15.3309 9.08334 14.9167V11.4167H18.9167Z"
              fill="#1A1A1A"
            />
          </svg>
        </button>
      </div>
    </Link>
  );
};
