import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { ProductPage } from '../components/ProductPage/ProductPage';
import { Breadcrumbs } from '../components/UI/Breadcrumbs/Breadcrumbs';
import { RelatedProducts } from '../components/RelatedProducts/RelatedProducts';
import { ProductPageSkeleton } from '../components/ProductPage/ProductPageSkeleton';

const Product = () => {
  const [isLoadiong, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    setIsLoading(true);

    async function getProduct() {
      try {
        const res = await axios.get(
          'https://654fb2ee358230d8f0cda05a.mockapi.io/products/' + id
        );
        setProduct(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getProduct();
  }, [id]);

  return (
    <>
      <Breadcrumbs title={product.title} />
      {isLoadiong ? <ProductPageSkeleton /> : <ProductPage {...product} />}

      <RelatedProducts category={product.category} />
    </>
  );
};

export default Product;