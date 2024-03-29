import { useEffect } from 'react';

import { Advantages } from '../components/Advantages/Advantages';
import { Banners } from '../components/Banners/Banners';
import { Categories } from '../components/Categories/Categories';
import { PopularProducts } from '../components/PopularProducts/PopularProducts';
import { Deals } from '../components/Deals/Deals';
import { DiscountBlock } from '../components/DiscountBlock/DiscountBlock';
import { Partners } from '../components/Partners/Partners';
import { InstagramBlock } from '../components/InstagramBlock/InstagramBlock';
import { LatestNews } from '../components/LatestNews/LatestNews';
import { Testimonials } from '../components/Testimonials/Testimonials';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="section section_mt">
        <Banners />
      </section>
      <section className="section section_layer-top section_mb">
        <Advantages />
      </section>
      <section className="section section_mb">
        <Categories />
      </section>
      <section className="section section_mb">
        <Deals />
      </section>
      <section className="section section_mb">
        <PopularProducts />
      </section>
      <section className="section section_mb">
        <DiscountBlock />
      </section>
      <section className="section section_mb">
        <LatestNews />
      </section>
      <div className="section section_gray ">
        <Testimonials />
      </div>
      <div className="section">
        <Partners />
      </div>
      <section className="section section_mb">
        <InstagramBlock />
      </section>
    </>
  );
};

export default Home;