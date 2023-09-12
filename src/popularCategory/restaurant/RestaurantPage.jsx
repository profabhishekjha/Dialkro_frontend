import React from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel'
const RestaurantPage = () => {
  const images = [
    'Hero_pg1/CarouselImages/doctor.webp',
    'Hero_pg1/CarouselImages/market.webp',
    'Hero_pg1/CarouselImages/parcel.webp',
    'Hero_pg1/CarouselImages/resturant.webp',
    'Hero_pg1/CarouselImages/transport.webp'
  ]
  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        <CardSection />
        <CardSection />
        <CardSection />
        <CardSection />
        <CardSection />
      </div>
      <Footer />
    </div>
  )
}

export default RestaurantPage
