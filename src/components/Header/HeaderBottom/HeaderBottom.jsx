import { Containter } from '../../Container/Containter';
import { Navbar } from '../MenuDesktop/Navbar/Navbar';

import { contactsData } from '../../../data/contactsData';

import styles from './HeaderBottom.module.scss';

export const HeaderBottom = ({isVisible}) => {
  return (
    <div className={styles['header-bot']}>
      <Containter>
        <div className={styles['header-bot__row']}>
          <Navbar isVisible={isVisible}/>
          <a
            href={`tel:${contactsData.mainPhoneNumberLink}`}
            className={`${styles['header-bot__phone-link']} link`}
          >
            <svg
              width="23"
              height="23"
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
            {contactsData.mainPhoneNumber}
          </a>
        </div>
      </Containter>
    </div>
  );
};
