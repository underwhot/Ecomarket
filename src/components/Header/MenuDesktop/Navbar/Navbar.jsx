import { menuItemsData } from '../../../../data/menuItemsData';
import { MenuItems } from '../MenuItems/MenuItems';

import styles from './Navbar.module.scss';

export const Navbar = ({isVisible}) => {
  const depthLevel = 0;

  return (
    <nav>
      <ul className={styles.list}>
        {menuItemsData.map((item, i) => (
          <MenuItems items={item} key={i} depthLevel={depthLevel} isVisible={isVisible} />
        ))}
      </ul>
    </nav>
  );
};
