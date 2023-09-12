import React from 'react'
import Footer from '../components/Footer/Footer'
import Hero_pg2 from './Hero_pg2'
import Nav from '../components/Navbar/Nav'
import BannerCarousel from '../components/Body/Carousel/BannerCarousel'

const ProductDetailPage = () => {
  const images = [
    '/Hero_pg1/Popular/couriers.webp',
    '/Hero_pg1/Popular/hospital.webp',
    '/Hero_pg1/Popular/hotel.webp',
    '/Hero_pg1/Popular/movers.webp'
  ]
  return (
    <div>
      <Nav />
      <BannerCarousel images={images} />
      <Hero_pg2 />
      <Footer />
    </div>
  )
}

export default ProductDetailPage
