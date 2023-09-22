import React from 'react'
import Footer from '../components/Footer/Footer'
import Hero_pg2 from './Hero_pg2'
import Nav from '../components/Navbar/Nav'
import BannerCarousel from '../components/Body/Carousel/BannerCarousel'

const ProductDetailPage = () => {
  const images = [
    '/CarouselImages/doctor.webp',
    '/CarouselImages/market.webp',
    '/CarouselImages/parcel.webp',
    '/CarouselImages/resturant.webp',
    '/CarouselImages/banner.webp',
    '/CarouselImages/transport.webp'
  ]

  const subcategoryContent = {
    southindian: <SushiComponent />,
    market: <MarketComponent />,
    parcel: <ParcelComponent />,
    restaurant: <RestaurantComponent />,
    banner: <BannerComponent />,
    transport: <TransportComponent />
    // Add more subcategories as needed
  }

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
