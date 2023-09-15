import React from 'react'
import Footer from '../components/Footer/Footer'
import Hero_pg2 from './Hero_pg2'
import Nav from '../components/Navbar/Nav'
import BannerCarousel from '../components/Body/Carousel/BannerCarousel'

const ProductDetailPage = () => {
  const images = [
    '/Popular/couriers.webp',
    '/Popular/hospital.webp',
    '/Popular/hotel.webp',
    '/Popular/movers.webp'
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
