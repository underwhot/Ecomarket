import { useEffect } from 'react';

import { Breadcrumbs } from '../components/UI/Breadcrumbs/Breadcrumbs';
import { AboutUs } from '../components/AboutUs/AboutUs';

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcrumbs />
      <AboutUs />
    </>
  );
};
