import { useState } from 'react';
import { Container } from '../../Container/Container';
import { Logotype } from '../../Logotype/Logotype';
import { SearchBar } from '../../SearchBar/SearchBar';
import { MobileNav } from '../MenuMobile/MobileNav/MobileNav';

import { contactsData } from '../../../data/contactsData';

import styles from './HeaderTop.module.scss';
import { Link } from 'react-router-dom';

export const HeaderTop = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className={styles['header-top']}>
      <Container>
        <div className={styles['header-top__row']}>
          <div className={styles['header-top__column']}>
            <Logotype hideText={true} zIndex='99' />
          </div>
          <div className={styles['header-top__column']}>
            <SearchBar showSearch={showSearch} setShowSearch={setShowSearch} />
          </div>
          <div className={styles['header-top__column']}>
            <ul className={styles['header-top__list']}>
              <li className={styles['header-top__item']}>
                <button
                  onClick={() => setShowSearch((prev) => !prev)}
                  type="button"
                  className={styles.search}
                >
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0214 12.0215C12.2167 11.8262 12.5333 11.8262 12.7286 12.0215L16.3536 15.6465C16.5488 15.8417 16.5488 16.1583 16.3536 16.3536C16.1583 16.5488 15.8417 16.5488 15.6464 16.3536L12.0214 12.7286C11.8262 12.5333 11.8262 12.2167 12.0214 12.0215Z"
                      fill="#1A1A1A"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.66667 1.5C4.26091 1.5 1.5 4.26091 1.5 7.66667C1.5 11.0724 4.26091 13.8333 7.66667 13.8333C11.0724 13.8333 13.8333 11.0724 13.8333 7.66667C13.8333 4.26091 11.0724 1.5 7.66667 1.5ZM0.5 7.66667C0.5 3.70863 3.70863 0.5 7.66667 0.5C11.6247 0.5 14.8333 3.70863 14.8333 7.66667C14.8333 11.6247 11.6247 14.8333 7.66667 14.8333C3.70863 14.8333 0.5 11.6247 0.5 7.66667Z"
                      fill="#1A1A1A"
                    />
                  </svg>
                </button>
              </li>
              <li
                className={`${styles['header-top__item']} ${styles.phoneIcon}`}
              >
                <a
                  href={`tel:${contactsData.mainPhoneNumberLink}`}
                  className={styles['header-top__link']}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.7115 2.18021C13.8191 1.78021 14.2305 1.54316 14.6305 1.65074C16.2408 2.08383 17.709 2.93242 18.8881 4.11151C20.0672 5.29061 20.9158 6.75882 21.3489 8.36909C21.4565 8.76908 21.2194 9.18056 20.8194 9.28814C20.4194 9.39572 20.0079 9.15867 19.9003 8.75867C19.5355 7.40221 18.8207 6.16542 17.8274 5.17217C16.8342 4.17893 15.5974 3.46409 14.2409 3.09927C13.8409 2.99168 13.6039 2.58021 13.7115 2.18021Z"
                      fill="#1A1A1A"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.8072 5.56203C12.9148 5.16203 13.3263 4.92501 13.7263 5.03262C14.743 5.30615 15.67 5.84198 16.4145 6.58646C17.159 7.33094 17.6948 8.25794 17.9683 9.27465C18.0759 9.67464 17.8389 10.0861 17.4389 10.1937C17.0389 10.3013 16.6274 10.0643 16.5198 9.66434C16.3146 8.9014 15.9125 8.20578 15.3538 7.64712C14.7952 7.08846 14.0995 6.68637 13.3366 6.48112C12.9366 6.37351 12.6996 5.96202 12.8072 5.56203Z"
                      fill="#1A1A1A"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.05133 2.28643C4.96685 2.426 3.97022 2.9556 3.24764 3.77636C2.52422 4.59808 2.1251 5.65529 2.125 6.75007C2.125 10.4963 3.61317 14.0889 6.26212 16.7379C8.91107 19.3868 12.5038 20.875 16.25 20.875C17.3379 20.875 17.8317 20.7594 18.1467 20.6094C18.4115 20.4834 18.584 20.3276 18.9016 20.0408C18.9946 19.9568 19.1001 19.8615 19.224 19.7524C20.0459 19.029 20.5759 18.0308 20.7149 16.9448L21.4589 17.04L20.7143 16.9502C20.7174 16.9239 20.712 16.8972 20.6987 16.8743C20.6854 16.8513 20.665 16.8333 20.6406 16.8229L20.6384 16.822L15.5162 14.6261C15.5161 14.6261 15.5163 14.6262 15.5162 14.6261C15.4972 14.618 15.4762 14.6147 15.4556 14.6166C15.4349 14.6185 15.415 14.6256 15.3977 14.6371L12.6604 16.4614C12.4282 16.618 12.1594 16.7115 11.8802 16.7329C11.5999 16.7544 11.3188 16.7024 11.0648 16.582L11.0593 16.5795C9.04856 15.607 7.42238 13.9877 6.44123 11.9812L6.43903 11.9767C6.31788 11.7247 6.26413 11.4455 6.283 11.1665C6.30183 10.888 6.39239 10.6192 6.54586 10.386C6.54614 10.3856 6.54641 10.3852 6.54669 10.3848L8.36517 7.60634C8.36518 7.60632 8.36516 7.60636 8.36517 7.60634C8.37641 7.58913 8.38328 7.56936 8.38509 7.54889C8.38689 7.5285 8.38366 7.50798 8.37567 7.48914C8.37563 7.48904 8.37572 7.48924 8.37567 7.48914L6.17941 2.36569C6.17828 2.36366 6.17442 2.35675 6.16678 2.34531C6.15922 2.33398 6.15069 2.32232 6.14202 2.31133C6.13656 2.30835 6.13113 2.3053 6.12574 2.30218C6.10322 2.28915 6.07716 2.28364 6.05133 2.28643ZM6.7851 0.954561C6.50264 0.814514 6.1847 0.759465 5.8702 0.797393L5.86489 0.798053C4.41704 0.983153 3.08629 1.68962 2.12178 2.78518C1.15727 3.88075 0.625134 5.29029 0.625 6.74993C0.625 10.8939 2.2712 14.8683 5.20146 17.7985C8.13171 20.7288 12.106 22.375 16.25 22.375C17.4121 22.375 18.1737 22.2578 18.7913 21.9639C19.2734 21.7344 19.6431 21.3974 19.9869 21.084C20.0639 21.0138 20.1397 20.9447 20.2151 20.8783C21.3108 19.9139 22.0175 18.5831 22.2028 17.1352L22.2035 17.1298C22.2456 16.7807 22.1731 16.4274 21.997 16.1231C21.8212 15.8192 21.5516 15.5805 21.2286 15.4429C21.2281 15.4427 21.2276 15.4425 21.2271 15.4423L16.1063 13.247L16.1053 13.2466C15.8569 13.1405 15.5859 13.0981 15.3169 13.123C15.0482 13.148 14.7899 13.2395 14.5653 13.3893L11.8266 15.2145L11.8219 15.2176C11.8052 15.229 11.7858 15.2358 11.7656 15.2373C11.746 15.2388 11.7264 15.2353 11.7085 15.2272C10.003 14.4012 8.62349 13.0275 7.79035 11.3255C7.78195 11.3075 7.77824 11.2876 7.77958 11.2677C7.78096 11.2474 7.78758 11.2277 7.79881 11.2107L7.80029 11.2085L9.62029 8.42772C9.76676 8.20388 9.85575 7.94729 9.87928 7.68082C9.9028 7.41435 9.86018 7.1462 9.75521 6.90016L7.55767 1.77375C7.55749 1.77332 7.55731 1.7729 7.55713 1.77248C7.47904 1.58922 7.35573 1.41875 7.25036 1.29909C7.195 1.23623 7.12459 1.16449 7.04352 1.10138C7.00331 1.07008 6.94572 1.02929 6.874 0.993305C6.85277 0.982651 6.82272 0.968496 6.7851 0.954561Z"
                      fill="#1A1A1A"
                    />
                  </svg>
                </a>
              </li>
              <li className={styles['header-top__item']}>
                <Link to="/favourites" className={styles['header-top__link']}>
                  <svg
                    width="30"
                    height="26"
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
                </Link>
              </li>
              <li className={styles['header-top__item']}>
                <Link to="/cart" className={styles['bag']}>
                  <span className={styles['bag__counter']}>2</span>
                  <svg
                    width="27"
                    height="26"
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
                  <div className={styles['bag__text']}>
                    <div className={styles['bag__text-top']}>
                      Shopping cart:
                    </div>
                    <div className={styles['bag__text-bot']}>$57.00</div>
                  </div>
                </Link>
              </li>
              <li className={styles['header-top__item']}>
                <MobileNav/>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
