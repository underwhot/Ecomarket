import { useEffect } from 'react'
import { ShopProductsList } from '../components/ShopProductsList/ShopProductsList'
import { Breadcrumbs } from '../components/UI/Breadcrumbs/Breadcrumbs'

export const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Breadcrumbs />
      <ShopProductsList />
    </>
  )
}
