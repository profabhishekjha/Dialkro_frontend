import React from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel'
const HospitalsPage = () => {
  const category = 'hospital' // Category name
  const images = [
    `Hero_pg1/Popular/${category}Carousel/${category}1.webp`,
    `Hero_pg1/Popular/${category}Carousel/${category}2.webp`,
    `Hero_pg1/Popular/${category}Carousel/${category}3.webp`,
    `Hero_pg1/Popular/${category}Carousel/${category}4.webp`
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

export default HospitalsPage
