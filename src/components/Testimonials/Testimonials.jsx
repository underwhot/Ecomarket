import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

import { Containter } from '../Container/Containter';
import { SectionTop } from '../UI/SectionTop/SectionTop';
import { Testimonial } from './Testimonial';

import styles from './Testimonials.module.scss';

import { testimonials } from '../../data/testimonialsData';

export const Testimonials = () => {
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
    <Containter>
      <SectionTop title="Client Testimonials" />
      <div className={styles.slider}>
        <swiper-container ref={swiperRef} init="false">
          {testimonials.map((testimonial) => (
            <swiper-slide key={testimonial.name}>
              <Testimonial {...testimonial} />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </Containter>
  );
};
