import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

import { Containter } from '../Container/Containter';
import { SectionTop } from '../UI/SectionTop/SectionTop';
import { Category } from './Category';
import styles from './Categories.module.scss';

import { categories } from '../../data/categoriesData';

export const Categories = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      slidesPerView: 6,
      spaceBetween: 8,
      scrollbar: {
        el: '.scrollbar',
        draggable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 2.2,
          spaceBetween: 8,
        },
        479: {
          slidesPerView: 3.3,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 6,
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
    <Containter>
      <SectionTop title="Shop by Categories" to="/" />
      <div className={styles.slider}>
        <swiper-container ref={swiperRef} init="false">
          {categories.map((category) => (
            <swiper-slide key={category.title}>
              <Category {...category} />
            </swiper-slide>
          ))}
        </swiper-container>
        <div className="scrollbar"></div>
      </div>
    </Containter>
  );
};
