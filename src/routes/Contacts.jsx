import { useEffect } from 'react';

import { ContactItems } from '../components/ContactItems/ContactItems';
import { Map } from '../components/Map/Map';
import { Breadcrumbs } from '../components/UI/Breadcrumbs/Breadcrumbs';

export const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcrumbs />
      <ContactItems />
      <Map />
    </>
  );
};
