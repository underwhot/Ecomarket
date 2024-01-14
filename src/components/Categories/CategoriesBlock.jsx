import { Container } from '../Container/Container';
import { SectionTop } from '../UI/SectionTop/SectionTop';
import { Category } from './Category';

import styles from './CategoriesBlock.module.scss';

import { categories } from '../../data/categoriesData';

export const CategoriesBlock = () => {
  return (
    <Container>
      <SectionTop title="Categories" />
      <ul className={styles.list}>
        {categories.map((category) => (
          <li className={styles.item} key={category.title}>
            <Category {...category} />
          </li>
        ))}
      </ul>
    </Container>
  );
};
