import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

import { Container } from '../Container/Container';
import { SectionTop } from '../UI/SectionTop/SectionTop';
import { NewsAtricle } from './NewsAtricle';

import styles from './LatestNews.module.scss';

import { news } from '../../data/newsData';

export const LatestNews = () => {
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
      <SectionTop title="Latest News" to="/news" />
      <div className={styles.slider}>
        <swiper-container ref={swiperRef} init="false">
          {news.map((item) => (
            <swiper-slide key={item.id}>
              <NewsAtricle {...item} />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </Container>
  );
};
