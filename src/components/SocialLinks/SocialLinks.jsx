import styles from './SocialLinks.module.scss';

export const SocialLinks = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a
          href="https://www.facebook.com/"
          target="blank"
          className={styles.link}
        >
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99776 2.98875H9.64101V0.12675C9.35751 0.08775 8.38251 0 7.24701 0C4.87776 0 3.25476 1.49025 3.25476 4.22925V6.75H0.640259V9.9495H3.25476V18H6.46026V9.95025H8.96901L9.36726 6.75075H6.45951V4.5465C6.46026 3.62175 6.70926 2.98875 7.99776 2.98875Z"
              fill="#4D4D4D"
            />
          </svg>
        </a>
      </li>
      <li className={styles.item}>
        <a
          href="https://www.instagram.com/"
          target="blank"
          className={styles.link}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1904_1777)">
              <path
                d="M17.9824 5.29205C17.9402 4.33564 17.7855 3.67812 17.564 3.10836C17.3354 2.50359 16.9838 1.96213 16.5231 1.51201C16.073 1.05489 15.528 0.699691 14.9302 0.474702C14.3571 0.253147 13.703 0.0984842 12.7466 0.0563159C11.7831 0.0105764 11.4772 0 9.03336 0C6.58953 0 6.28364 0.0105764 5.32366 0.0527447C4.36725 0.0949129 3.70973 0.249713 3.14011 0.471131C2.5352 0.699691 1.99374 1.05132 1.54363 1.51201C1.08651 1.96213 0.731444 2.50716 0.506318 3.10493C0.284763 3.67812 0.1301 4.33207 0.087932 5.28848C0.0421926 6.25203 0.0316162 6.55792 0.0316162 9.00176C0.0316162 11.4456 0.0421926 11.7515 0.0843608 12.7115C0.126529 13.6679 0.281329 14.3254 0.502884 14.8952C0.731444 15.4999 1.08651 16.0414 1.54363 16.4915C1.99374 16.9486 2.53877 17.3038 3.13654 17.5288C3.70973 17.7504 4.36368 17.905 5.32022 17.9472C6.28007 17.9895 6.58609 17.9999 9.02993 17.9999C11.4738 17.9999 11.7797 17.9895 12.7396 17.9472C13.696 17.905 14.3536 17.7504 14.9232 17.5288C16.1329 17.0611 17.0893 16.1047 17.557 14.8952C17.7784 14.322 17.9332 13.6679 17.9754 12.7115C18.0175 11.7515 18.0281 11.4456 18.0281 9.00176C18.0281 6.55792 18.0245 6.25203 17.9824 5.29205ZM16.3614 12.6411C16.3227 13.5202 16.175 13.9949 16.052 14.3114C15.7495 15.0956 15.1271 15.7179 14.343 16.0204C14.0265 16.1434 13.5484 16.2911 12.6727 16.3297C11.7233 16.372 11.4386 16.3824 9.03693 16.3824C6.63527 16.3824 6.34696 16.372 5.40099 16.3297C4.52191 16.2911 4.04721 16.1434 3.73074 16.0204C3.34052 15.8761 2.98531 15.6476 2.697 15.3487C2.39812 15.0568 2.16956 14.7052 2.02533 14.315C1.90226 13.9985 1.75461 13.5202 1.71601 12.6447C1.6737 11.6953 1.66326 11.4104 1.66326 9.00876C1.66326 6.60709 1.6737 6.31878 1.71601 5.37295C1.75461 4.49387 1.90226 4.01917 2.02533 3.7027C2.16956 3.31234 2.39812 2.95727 2.70058 2.66883C2.99232 2.36994 3.34395 2.14138 3.73431 1.99729C4.05078 1.87422 4.52905 1.72656 5.40456 1.68783C6.35396 1.64566 6.63884 1.63508 9.04037 1.63508C11.4456 1.63508 11.7303 1.64566 12.6763 1.68783C13.5554 1.72656 14.0301 1.87422 14.3466 1.99729C14.7368 2.14138 15.092 2.36994 15.3803 2.66883C15.6792 2.96071 15.9077 3.31234 16.052 3.7027C16.175 4.01917 16.3227 4.49731 16.3614 5.37295C16.4036 6.32236 16.4142 6.60709 16.4142 9.00876C16.4142 11.4104 16.4036 11.6917 16.3614 12.6411Z"
                fill="#4D4D4D"
              />
              <path
                d="M9.03337 4.37793C6.48061 4.37793 4.40942 6.44898 4.40942 9.00188C4.40942 11.5548 6.48061 13.6258 9.03337 13.6258C11.5863 13.6258 13.6573 11.5548 13.6573 9.00188C13.6573 6.44898 11.5863 4.37793 9.03337 4.37793ZM9.03337 12.0013C7.37727 12.0013 6.03393 10.6581 6.03393 9.00188C6.03393 7.34564 7.37727 6.00244 9.03337 6.00244C10.6896 6.00244 12.0328 7.34564 12.0328 9.00188C12.0328 10.6581 10.6896 12.0013 9.03337 12.0013Z"
                fill="#4D4D4D"
              />
              <path
                d="M14.9197 4.19521C14.9197 4.79133 14.4364 5.27469 13.8401 5.27469C13.244 5.27469 12.7606 4.79133 12.7606 4.19521C12.7606 3.59894 13.244 3.11572 13.8401 3.11572C14.4364 3.11572 14.9197 3.59894 14.9197 4.19521Z"
                fill="#4D4D4D"
              />
            </g>
            <defs>
              <clipPath id="clip0_1904_1777">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </li>
      <li className={styles.item}>
        <a
          href="https://www.pinterest.com/"
          target="blank"
          className={styles.link}
        >
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.24471 0C3.31136 0 0.687744 3.16139 0.687744 6.60855C0.687744 8.20724 1.58103 10.2008 3.01097 10.8331C3.22811 10.931 3.34624 10.8894 3.39462 10.688C3.43737 10.535 3.62525 9.79807 3.71638 9.45042C3.74451 9.33904 3.72988 9.24229 3.63988 9.13766C3.16511 8.58864 2.78821 7.58847 2.78821 6.65017C2.78821 4.24594 4.69967 1.91146 7.9522 1.91146C10.7648 1.91146 12.7325 3.73854 12.7325 6.35204C12.7325 9.30529 11.1698 11.3484 9.13912 11.3484C8.0152 11.3484 7.17816 10.4663 7.44367 9.37505C7.76431 8.07561 8.39321 6.6783 8.39321 5.74113C8.39321 4.90072 7.91844 4.20544 6.94865 4.20544C5.80447 4.20544 4.87631 5.33837 4.87631 6.85943C4.87631 7.82585 5.21832 8.47838 5.21832 8.47838C5.21832 8.47838 4.08652 13.0506 3.87614 13.9045C3.52062 15.3502 3.92451 17.6914 3.95939 17.8928C3.98077 18.0042 4.10565 18.0391 4.1754 17.9479C4.28678 17.8017 5.65484 15.8497 6.03848 14.4389C6.17799 13.9248 6.75064 11.84 6.75064 11.84C7.12753 12.5207 8.21546 13.0911 9.37426 13.0911C12.8214 13.0911 15.3123 10.0613 15.3123 6.30141C15.2999 2.69675 12.215 0 8.24471 0Z"
              fill="#4D4D4D"
            />
          </svg>
        </a>
      </li>
      <li className={styles.item}>
        <a href="https://twitter.com/" target="blank" className={styles.link}>
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 2.41888C17.3306 2.7125 16.6174 2.90713 15.8737 3.00163C16.6388 2.54488 17.2226 1.82713 17.4971 0.962C16.7839 1.38725 15.9964 1.68763 15.1571 1.85525C14.4799 1.13413 13.5146 0.6875 12.4616 0.6875C10.4186 0.6875 8.77387 2.34575 8.77387 4.37863C8.77387 4.67113 8.79862 4.95238 8.85938 5.22013C5.7915 5.0705 3.07687 3.60013 1.25325 1.36025C0.934875 1.91263 0.748125 2.54488 0.748125 3.2255C0.748125 4.5035 1.40625 5.63638 2.38725 6.29225C1.79437 6.281 1.21275 6.10888 0.72 5.83775C0.72 5.849 0.72 5.86363 0.72 5.87825C0.72 7.6715 1.99912 9.161 3.6765 9.50413C3.37612 9.58625 3.04875 9.62563 2.709 9.62563C2.47275 9.62563 2.23425 9.61213 2.01038 9.56263C2.4885 11.024 3.84525 12.0984 5.4585 12.1333C4.203 13.1154 2.60888 13.7071 0.883125 13.7071C0.5805 13.7071 0.29025 13.6936 0 13.6565C1.63462 14.7106 3.57188 15.3125 5.661 15.3125C12.4515 15.3125 16.164 9.6875 16.164 4.81175C16.164 4.64863 16.1584 4.49113 16.1505 4.33475C16.8829 3.815 17.4982 3.16588 18 2.41888Z"
              fill="#4D4D4D"
            />
          </svg>
        </a>
      </li>
    </ul>
  );
};
