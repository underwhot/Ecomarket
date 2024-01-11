import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { setDeleteProduct } from '../../redux/slices/favouritesSlice';
import {
  selectCartProducts,
  setToggleToCart,
} from '../../redux/slices/cartSlice';
import { isItemInArr } from '../../utils/isItemInArr';

import styles from './FavouriteProduct.module.scss';

export const FavouriteProduct = ({
  id,
  title,
  imgUrl,
  price,
  oldPrice,
  rating,
}) => {
  const dispatch = useDispatch();
  const productsInCart = useSelector(selectCartProducts);

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

  return (
    <tr className={styles.product}>
      <td>
        <div className={styles.productTitle}>
          <Link to={`/shop/${id}`} className={styles.image + ' ' + 'ibg'}>
            <img src={imgUrl} alt={title} />
          </Link>
          <Link to={`/shop/${id}`}>{title}</Link>
        </div>
      </td>
      <td>
        <div className={styles.productPrice}>
          <span className={styles.productPriceCurrent}>
            ${price.toFixed(2)}
          </span>
          {oldPrice && (
            <span className={styles.productPriceOld}>
              ${oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </td>

      <td>
        <button
          className={`${styles.productAddToCartBtn} ${
            isItemInArr(id, productsInCart) ? styles.remove : ''
          }`}
          type="button"
          onClick={handleAddToCart}
        >
          {isItemInArr(id, productsInCart) ? 'Remove from cart' : 'Add to cart'}
        </button>
      </td>

      <td className={styles.productDelete}>
        <button
          onClick={() => dispatch(setDeleteProduct({ id }))}
          type="button"
          className={styles.DeleteBtn}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.469668 0.469672C0.76256 0.176777 1.23743 0.176776 1.53033 0.469668L5.00002 3.93934L8.46967 0.469672C8.76256 0.176777 9.23743 0.176776 9.53033 0.469668C9.82322 0.762561 9.82322 1.23743 9.53033 1.53033L6.06068 5L9.53033 8.46967C9.82322 8.76257 9.82322 9.23744 9.53033 9.53033C9.23743 9.82322 8.76256 9.82322 8.46967 9.53033L5.00002 6.06066L1.53033 9.53033C1.23743 9.82322 0.762561 9.82322 0.469668 9.53033C0.176776 9.23743 0.176777 8.76256 0.469672 8.46967L3.93936 5L0.469672 1.53033C0.176777 1.23744 0.176776 0.762566 0.469668 0.469672Z"
              fill="#666666"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};
