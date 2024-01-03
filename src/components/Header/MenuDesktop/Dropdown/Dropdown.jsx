import { MenuItems } from '../MenuItems/MenuItems';

import styles from './Dropdown.module.scss';

export const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel += 1;
  const dropdownClass = depthLevel > 1 ? styles['dropdown-submenu'] : '';

  return (
    <ul
      className={`${styles.dropdown} ${dropdownClass} ${
        dropdown ? styles.active : ''
      }`}
    >
      {submenus.map((submenu, i) => (
        <MenuItems items={submenu} key={i} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};
