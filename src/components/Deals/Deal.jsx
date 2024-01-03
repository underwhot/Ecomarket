import { LinkBtn } from '../UI/LinkBtn/LinkBtn';
import { CountdownTimer } from '../CountdownTimer/CountdownTimer';
import styles from './Deal.module.scss';

export const Deal = ({
  url,
  bg,
  desc,
  title,
  actionText,
  actionSale,
  deadline,
}) => {
  // const deadline = new Date('2023-12-31T23:59:59');

  // const currentDate = new Date();
  // Прибавляем 7 дней (7 * 24 часа * 60 минут * 60 секунд * 1000 миллисекунд)
  // const futureDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);

  return (
    <div className={`${styles.deal} ibg`}>
      <img src={bg} alt={title} />
      <div className={styles.content}>
        <p className={styles.desc}>{desc}</p>
        <h2 className={styles.title}>{title}</h2>
        {actionText ? (
          <div className={styles.action}>
            {actionText}
            <span>{actionSale}</span>
          </div>
        ) : null}
        {deadline ? <CountdownTimer deadline={deadline} /> : null}

        <LinkBtn to={url} text="Shop Now" color="white" />
      </div>
    </div>
  );
};
