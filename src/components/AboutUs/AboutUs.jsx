import { Container } from '../Container/Container';
import { SectionTop } from '../UI/SectionTop/SectionTop';

import styles from './AboutUs.module.scss';

import bg from '../../../public/img/about/bg.jpg';
import farmer from '../../../public/img/about/farmer.png';

const advantages = [
  {
    img: '../../../public/img/about/advantages/01.svg',
    title: '100% Organic food',
    text: '100% healthy & Fresh food.',
  },
  {
    img: '../../../public/img/about/advantages/02.svg',
    title: 'Great Support 24/7',
    text: 'Instant access to Contact',
  },
  {
    img: '../../../public/img/about/advantages/03.svg',
    title: 'Customer Feedback',
    text: 'Our happy customer',
  },
  {
    img: '../../../public/img/about/advantages/04.svg',
    title: '100% Sucure Payment',
    text: 'We ensure your money is save',
  },
  {
    img: '../../../public/img/about/advantages/05.svg',
    title: 'Free Shipping',
    text: 'Free shipping with discount',
  },
  {
    img: '../../../public/img/about/advantages/06.svg',
    title: 'Super Fresh Food',
    text: 'Super healthy & Fresh food.',
  },
];

export const AboutUs = () => {
  return (
    <>
      <Container>
        <SectionTop title="About Us" />
      </Container>
      <section className={styles.bg + ' ' + 'ibg'}>
        <img src={bg} alt="yard" />
        <Container>
          <div className={styles.root}>
            <div className={styles.column}>
              <div className={styles.image + ' ' + 'ibg'}>
                <img src={farmer} alt="farmer" />
              </div>
            </div>
            <div className={styles.column}>
              <h2 className={styles.title}>100% Trusted Organic Food Store</h2>
              <p className={styles.text}>
                Pellentesque a ante vulputate leo porttitor luctus sed eget
                eros. Nulla et rhoncus neque. Duis non diam eget est luctus
                tincidunt a a mi. Nulla eu eros consequat tortor tincidunt
                feugiat.
              </p>
              <ul className={styles.list}>
                {advantages.map((item) => (
                  <li key={item.title} className={styles.item}>
                    <div className={styles.itemImg}>
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div className={styles.info}>
                      <h3 className={styles.subtitle}>{item.title}</h3>
                      <p className={styles.subtext}>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
