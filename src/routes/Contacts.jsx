import { useEffect } from 'react';

import { ContactItems } from '../components/ContactItems/ContactItems';
import { Map } from '../components/Map/Map';
import { Breadcrumbs } from '../components/UI/Breadcrumbs/Breadcrumbs';

const Contacts = () => {
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

export default Contacts;
