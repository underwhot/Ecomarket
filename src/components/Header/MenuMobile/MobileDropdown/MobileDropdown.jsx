import { MobileMenuItems } from '../MobileMenuItems/MobileMenuItems';
import styles from './MobileDropdown.module.scss';

export const MobileDropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel += 1;
  const dropdownClass = depthLevel > 1 ? styles['dropdown-submenu'] : '';

  return (
    <ul
      className={`${styles.dropdown} ${dropdownClass} ${
        dropdown ? styles.active : ''
      }`}
    >
      {submenus.map((submenu, i) => (
        <MobileMenuItems items={submenu} key={i} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};
