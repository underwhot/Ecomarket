import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

import { Container } from '../Container/Container';
import { Deal } from './Deal';
import styles from './Deals.module.scss';

import bgMonth from '/img/deals/Month.jpg';
import bgMeat from '/img/deals/Meat.jpg';
import bgFruit from '/img/deals/Fruit.jpg';

export const Deals = () => {
  const currentDate = new Date();
  const futureDateOne = new Date(
    currentDate.getTime() + 4 * 24 * 60 * 60 * 1000
  );
  const futureDateTwo = new Date(
    currentDate.getTime() + 1 * 20 * 60 * 60 * 1000
  );

  const swiperRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      slidesPerView: 3,
      spaceBetween: 24,
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 8,
        },
        479: {
          slidesPerView: 1.7,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2.3,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
      injectStyles: [
        `
        ::slotted(swiper-slide) {
          height: auto;
        }
        `,
      ],
    };

    Object.assign(swiperRef.current, params);
    swiperRef.current.initialize();
  }, []);

  return (
    <Container>
      <div className={styles.slider}>
        <swiper-container ref={swiperRef} init="false">
          <swiper-slide>
            <Deal
              url="/"
              bg={bgMonth}
              desc="Best Deals"
              title="Sale of the Month"
              deadline={futureDateOne}
            />
          </swiper-slide>
          <swiper-slide>
            <Deal
              url="/"
              bg={bgMeat}
              desc="85% Fat Free"
              title="Low-Fat Meat"
              actionText="Started at"
              actionSale="$79.99"
            />
          </swiper-slide>
          <swiper-slide>
            <Deal
              url="/"
              bg={bgFruit}
              desc="Summer Sale"
              title="100% Fresh Fruit"
              // actionText="Up to"
              // actionSale="64% OFF"
              deadline={futureDateTwo}
            />
          </swiper-slide>
        </swiper-container>
      </div>
    </Container>
  );
};
