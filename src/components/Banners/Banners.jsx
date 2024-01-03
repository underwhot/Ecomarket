import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

import { Containter } from '../Container/Containter';
import { Banner } from './Banner';

import styles from './Banners.module.scss';

import { banners } from '../../data/bannersData';

export const Banners = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      slidesPerView: 1,
      spaceBetween: 15,
      parallax: true,
      speed: '800',
      loop: true,
      // autoHeight: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        clickable: true,
      },
      breakpoints: {
        320: {},
        479: {},
        768: {},
        992: {},
        1200: {},
      },
      // injectStyles: [
      //   `
      //   ::slotted(swiper-slide) {
      //     height: auto;
      //   }
      //   `,
      // ],
    };

    Object.assign(swiperRef.current, params);
    swiperRef.current.initialize();
  }, []);

  return (
    <div className={styles.containerBig}>
      <Containter>
        <div className={styles.slider}>
          <swiper-container ref={swiperRef} init="false">
            {banners.map((banner) => (
              <swiper-slide key={banner.id}>
                <Banner {...banner} />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </Containter>
    </div>
  );
};
