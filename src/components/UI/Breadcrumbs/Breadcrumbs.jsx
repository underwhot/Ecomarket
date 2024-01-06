import { Link, useLocation } from 'react-router-dom';
import { Container } from '../../Container/Container';
import styles from './Breadcrumbs.module.scss';

export const Breadcrumbs = () => {
  const location = useLocation();
  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb, i, arr) => {
      currentLink += `/${crumb}`;

      if (crumb === 'cart') {
       crumb = 'Shopping cart'
      }
      
      if (i === arr.length - 1) {
        return (
          <li
            key={crumb}
            className={styles.breadcrumbsItem + ' ' + styles.lastCrumb}
          >
            {crumb}
          </li>
        );
      }

      return (
        <li key={crumb} className={styles.breadcrumbsItem}>
          <Link
            to={currentLink}
            className={`${styles.breadcrumbsLink} ${
              i === arr.length - 1 ? styles.lastCrumb : null
            } `}
          >
            {crumb}
          </Link>
        </li>
      );
    });

  return (
    <div className={styles.breadcrumbs}>
      <Container>
        <ul className={styles.breadcrumbsList}>
          <li className={styles.breadcrumbsItem}>
            <Link className={styles.breadcrumbsLink} to="/">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.50612 0.435568C8.78889 0.188144 9.21111 0.188144 9.49388 0.435568L17.4939 7.43557C17.6566 7.57798 17.75 7.78373 17.75 8V18C17.75 18.4142 17.4142 18.75 17 18.75H12C11.5858 18.75 11.25 18.4142 11.25 18V14C11.25 13.4033 11.0129 12.831 10.591 12.409C10.169 11.9871 9.59674 11.75 9 11.75C8.40326 11.75 7.83097 11.9871 7.40901 12.409C6.98705 12.831 6.75 13.4033 6.75 14V18C6.75 18.4142 6.41421 18.75 6 18.75H1C0.585786 18.75 0.25 18.4142 0.25 18V8C0.25 7.78373 0.34336 7.57798 0.506122 7.43557L8.50612 0.435568ZM1.75 8.34033V17.25H5.25V14C5.25 13.0054 5.64509 12.0516 6.34835 11.3483C7.05161 10.6451 8.00544 10.25 9 10.25C9.99456 10.25 10.9484 10.6451 11.6516 11.3483C12.3549 12.0516 12.75 13.0054 12.75 14V17.25H16.25V8.34033L9 1.99658L1.75 8.34033Z"
                  fill="#999999"
                />
              </svg>
            </Link>
          </li>
          {crumbs}
        </ul>
      </Container>
    </div>
  );
};
