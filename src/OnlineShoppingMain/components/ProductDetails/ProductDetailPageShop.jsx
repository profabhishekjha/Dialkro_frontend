import React from 'react'
import Footer from '../../../components/Footer/Footer'
import Hero_pg2 from './Hero_pg2'
import Nav from '../../../components/Navbar/Nav'
import BannerCarousel from '../../../components/Body/Carousel/BannerCarousel'

const ProductDetailb2bPageShop = () => {
  const images = [
    '/CarouselImages/doctor.webp',
    '/CarouselImages/market.webp',
    '/CarouselImages/parcel.webp',
    '/CarouselImages/resturant.webp',
    '/CarouselImages/banner.webp',
    '/CarouselImages/transport.webp'
  ]
  return (
    <div>
      <Nav services={`B2B`} />
      <BannerCarousel images={images} />
      <Hero_pg2 />
      <Footer />
    </div>
  )
}

export default ProductDetailb2bPageShop
